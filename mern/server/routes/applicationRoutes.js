const express = require('express');
const mongoose = require('mongoose');
const Application = require('../db/models/Application');  // Assuming Application model is defined correctly
const router = express.Router();

// Create application
router.post('/', async (req, res) => {
  try {
    const { status = 'draft' } = req.body;
    
    if (status === 'submitted') {
      const requiredFields = [
        'firstName', 'lastName', 'dob', 'phoneNumber',
        'email', 'lastEducationQualification', 'cgpa',
        'programId', 'transcript'
      ];
      
      const missing = requiredFields.filter(field => !req.body[field]);
      if (missing.length > 0) {
        return res.status(400).json({
          error: 'Missing required fields',
          missingFields: missing
        });
      }
    }

    const application = new Application({
      ...req.body,
      userId: new mongoose.Types.ObjectId(),
      status
    });

    await application.save();
    res.status(201).json(application);
  } catch (err) {
    res.status(400).json({ 
      error: 'Validation failed',
      details: err.message 
    });
  }
});

// Get all applications
router.get('/', async (req, res) => {
  try {
    const applications = await Application.find()
      .populate('programId', 'name')
      .lean();

    res.json(applications.map(app => ({
      ...app,
      programId: app.programId || { name: 'Program Deleted' }
    })));
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Delete an application (DELETE)
router.delete('/:id', async (req, res) => {
  try {
    const deletedApplication = await Application.findByIdAndDelete(req.params.id);

    if (!deletedApplication) {
      return res.status(404).json({ error: 'Application not found' });
    }

    res.json({ message: 'Application deleted successfully' });
  } catch (err) {
    console.error('Error deleting application:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Update an application by ID (PUT)
router.put('/:id', async (req, res) => {
  try {
    const { firstName, middleName, lastName, dob, phoneNumber, email, lastEducationQualification, cgpa, programId, transcript, status } = req.body;

    const updatedApplication = await Application.findByIdAndUpdate(
      req.params.id,
      {
        firstName,
        middleName,
        lastName,
        dob,
        phoneNumber,
        email,
        lastEducationQualification,
        cgpa,
        programId,
        transcript,
        status
      },
      { new: true }  // To return the updated application after modification
    );

    if (!updatedApplication) {
      return res.status(404).json({ error: 'Application not found' });
    }

    res.json(updatedApplication);  // Return the updated application
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Fetch an application by ID (GET)
router.get('/:id', async (req, res) => {
    try {
      const application = await Application.findById(req.params.id)
        .populate('programId')  // Populate programId field with Program data
        .populate('userId');    // Populate userId field with User data
      if (!application) {
        return res.status(404).json({ error: 'Application not found' });
      }
      res.status(200).json(application);  // Return the application data
    } catch (err) {
      console.error('Error fetching application:', err);
      res.status(500).json({ error: 'Server error' });
    }
  });
  




// Update status endpoint
router.patch('/:id/status', async (req, res) => {
  try {
    const { status } = req.body;
    const application = await Application.findById(req.params.id);

    if (!application) {
      return res.status(404).json({ error: 'Application not found' });
    }

    // Prevent final decisions on draft applications
    if (application.status === 'draft' && ['accepted', 'waitlisted', 'rejected'].includes(status)) {
      return res.status(400).json({
        error: 'Complete your application before marking as accepted/waitlisted/rejected'
      });
    }

    const updatedApplication = await Application.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    );

    res.json(updatedApplication);
  } catch (err) {
    console.error('Status update error:', err);
    res.status(400).json({
      error: 'Invalid status update',
      details: err.message
    });
  }
});








  module.exports = router;
