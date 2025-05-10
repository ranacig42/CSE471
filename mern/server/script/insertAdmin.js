const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Admin = require('../db/models/adminModel'); // Path to Admin model

// Connect to MongoDB (replace with your MongoDB connection string if needed)
mongoose.connect('mongodb://localhost:27017/gradglobe', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Function to create and insert an admin
const createAdmin = async () => {
  const email = 'ranamustafa@example.com';  // Change this to the desired email
  const password = 'rana4202';        // Change this to the desired password

  // Hash the password before saving to MongoDB
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create a new Admin instance
  const newAdmin = new Admin({
    email,
    password: hashedPassword,
  });

  try {
    // Save the new admin to the database
    await newAdmin.save();
    console.log('Admin created successfully!');
    mongoose.connection.close();  // Close the connection after inserting the admin
  } catch (err) {
    console.error('Error creating admin:', err);
    mongoose.connection.close();
  }
};

// Call the function to insert the admin
createAdmin();
