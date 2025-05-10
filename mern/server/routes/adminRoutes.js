const express = require('express');
const Admin = require('../db/models/adminModel');
const jwt = require('jsonwebtoken');
const protectAdmin = require('../middleware/authMiddleware'); // Protect routes using JWT
const router = express.Router();

// Admin login route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const admin = await Admin.findOne({ email });

  if (!admin) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  const isMatch = await admin.matchPassword(password); // Compare password
  if (!isMatch) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  const token = jwt.sign(
    { adminId: admin._id },
    process.env.JWT_SECRET,
    { expiresIn: '30d' }
  );

  res.json({
    token,
    adminId: admin._id,
    email: admin.email,
  });
});

// Admin dashboard route (protected)
router.get('/dashboard', protectAdmin, async (req, res) => {
  try {
    const programs = await Program.find();
    res.json(programs);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching programs' });
  }
});

module.exports = router;
