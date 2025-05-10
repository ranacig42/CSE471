const express = require('express');
const Program = require('../db/models/Program');
const router = express.Router();

// Middleware to parse JSON bodies
router.use(express.json());

// Create a new program (POST)
router.post('/', async (req, res) => {
  try {
    const {
      name,
      description,
      duration,
      admissionRequirements,
      applicationDeadline,
      programStartDate,
      field,
      deliveryType,
      programType,
      tuition,
      country,
      scholarship, // ✅ Include scholarship
      priorityType  // ✅ New: Accept priorityType like 'High' or 'Normal'
    } = req.body;

    const newProgram = new Program({
      name,
      description,
      duration,
      admissionRequirements,
      applicationDeadline,
      programStartDate,
      field,
      deliveryType,
      programType,
      tuition,
      country,
      scholarship,
      priorityType: priorityType || 'Normal' // Default to 'Normal' if not provided
    });

    await newProgram.save();
    res.status(201).json(newProgram);
  } catch (err) {
    console.error('Error saving program:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// 🔄 Move this BEFORE the `/:id` route
// Filter programs by type (GET)
router.get('/filter', async (req, res) => {
  const { programType } = req.query;
  try {
    const programs = await Program.find({ programType });
    res.status(200).json(programs);
  } catch (err) {
    console.error('Error fetching filtered programs:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get all programs (GET)
router.get('/', async (req, res) => {
  try {
    let programs = await Program.find();
    
    // Add default values for any missing fields in old programs
    programs = programs.map(program => ({
      country: program.country || 'Unknown',
      tuition: program.tuition || 0,
      scholarship: program.scholarship || false,
      priorityType: program.priorityType || 'Normal', // ✅ Add default priorityType
      ...program._doc
    }));

    res.status(200).json(programs);
  } catch (err) {
    console.error('Error fetching programs:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get a program by ID (GET)
router.get('/:id', async (req, res) => {
  try {
    const program = await Program.findById(req.params.id);
    if (!program) {
      return res.status(404).json({ error: 'Program not found' });
    }
    res.status(200).json(program);
  } catch (err) {
    console.error('Error fetching program:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Update a program by ID (PUT)
router.put('/:id', async (req, res) => {
  try {
    const updatedProgram = await Program.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedProgram) {
      return res.status(404).json({ error: 'Program not found' });
    }
    res.json(updatedProgram);
  } catch (err) {
    console.error('Error updating program:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Delete a program by ID (DELETE)
router.delete('/:id', async (req, res) => {
  try {
    const deletedProgram = await Program.findByIdAndDelete(req.params.id);
    if (!deletedProgram) {
      return res.status(404).json({ error: 'Program not found' });
    }
    res.json({ message: 'Program deleted successfully' });
  } catch (err) {
    console.error('Error deleting program:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
