const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  firstName: { 
    type: String,
    required: function() { return this.status !== 'draft' }
  },
  lastName: { 
    type: String,
    required: function() { return this.status !== 'draft' }
  },
  dob: { 
    type: Date,
    required: function() { return this.status !== 'draft' }
  },
  phoneNumber: { 
    type: String,
    required: function() { return this.status !== 'draft' }
  },
  email: {
    type: String,
    required: function() { return this.status !== 'draft' },
    match: [/.+@.+\..+/, 'Invalid email']
  },
  lastEducationQualification: { 
    type: String,
    required: function() { return this.status !== 'draft' }
  },
  cgpa: { 
    type: Number,
    required: function() { return this.status !== 'draft' }
  },
  programId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Program',
    required: function() { return this.status !== 'draft' }
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  transcript: { 
    type: String,
    required: function() { return this.status !== 'draft' }
  },
  status: {
    type: String,
    enum: ['draft', 'submitted', 'waitlisted', 'accepted', 'rejected'],
    default: 'draft',
    validate: {
      validator: function(status) {
        if (status === 'submitted') {
          return this.firstName && this.lastName && this.dob && 
                 this.phoneNumber && this.email && 
                 this.lastEducationQualification && this.cgpa &&
                 this.programId && this.transcript;
        }
        return true;
      },
      message: 'Missing required fields for submission'
    }
  }
}, { timestamps: true });

module.exports = mongoose.model('Application', applicationSchema);