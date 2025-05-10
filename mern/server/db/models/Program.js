const mongoose = require('mongoose');

const programSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: String, required: true },
  admissionRequirements: { type: String, required: true },
  applicationDeadline: { type: Date, required: true },
  programStartDate: { type: Date, required: true },
  field: { type: String, required: true },
  deliveryType: { type: String, required: true },
  programType: { type: String, enum: ['Masters', 'Undergraduate'], required: true },
  country: { type: String, required: true },           // ✅ NEW FIELD
  tuition: { type: Number, required: true },           // ✅ NEW FIELD
  scholarship: { type: Boolean, default: false },      // ✅ NEW FIELD
  priorityType: { type: String, enum: ['High', 'Normal'], default: 'Normal' }
}, {
  timestamps: true
});

const Program = mongoose.model('Program', programSchema);
module.exports = Program;
