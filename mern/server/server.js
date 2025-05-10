require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const programRoutes = require('./routes/programRoutes');
const applicationRoutes = require('./routes/applicationRoutes');
const app = express();

// Import models FIRST
require('./db/models/User');  // User model registration
require('./db/models/Program'); // Program model registration
require('./db/models/Application'); // Application model registration

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/questions', require('./routes/admissionQuestions'));

//user routes api
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);


// Updated MongoDB connection without deprecated options
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected successfully!'))
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1);
  });

// Routes
app.use('/api/programs', programRoutes);
app.use('/api/applications', applicationRoutes);

// Root Route
app.get('/', (req, res) => {
  res.send('Welcome to the GradGlobe API!');
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

const PORT = process.env.PORT || 1060;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


