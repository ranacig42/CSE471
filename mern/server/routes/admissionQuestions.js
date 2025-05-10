const express = require('express');
const router = express.Router();
const AdmissionQuestion = require('../db/models/AdmissionQuestion');

router.post('/', async (req, res) => {
  try {
    const question = new AdmissionQuestion(req.body);
    await question.save();
    res.status(201).json({ message: 'Your question has been submitted.' });
  } catch (err) {
    console.error('Question submission error:', err); // helpful
    res.status(400).json({ error: 'Failed to submit question', details: err.message });
  }
});



// Add this to admissionQuestions.js
router.get('/', async (req, res) => {
    try {
      const questions = await AdmissionQuestion.find().populate('programId', 'name');
      res.status(200).json(questions);
    } catch (err) {
      console.error('Error fetching questions:', err);
      res.status(500).json({ error: 'Failed to fetch questions' });
    }
  });
  


module.exports = router;
