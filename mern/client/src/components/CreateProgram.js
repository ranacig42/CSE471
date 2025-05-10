import React, { useState } from 'react';
import axios from 'axios';
import './CreateProgram.css';

const CreateProgram = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    duration: '',
    admissionRequirements: '',
    applicationDeadline: '',
    programStartDate: '',
    field: '',
    deliveryType: '',
    programType: '',
    tuition: '',
    country: '',
    scholarship: false,
    priorityType: 'Normal'
  });

  const [alert, setAlert] = useState({ message: '', type: '' });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:1060/api/programs', {
        ...formData,
        tuition: Number(formData.tuition) // ensure tuition is sent as Number
      });
      setAlert({ message: 'Program created successfully!', type: 'success' });

      // Reset the form
      setFormData({
        name: '',
        description: '',
        duration: '',
        admissionRequirements: '',
        applicationDeadline: '',
        programStartDate: '',
        field: '',
        deliveryType: '',
        programType: '',
        tuition: '',
        country: '',
        scholarship: false,
        priorityType: 'Normal'
      });
    } catch (err) {
      console.error('Error saving program:', err);
      setAlert({ message: 'Failed to create program. Please check all fields.', type: 'danger' });
    }
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header text-center">
          <h2>Create New Program</h2>
        </div>
        <div className="card-body">
          {alert.message && (
            <div className={`alert alert-${alert.type}`} role="alert">
              {alert.message}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            {/* Existing fields */}
            <div className="mb-3">
              <label className="form-label">Program Name</label>
              <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} required />
            </div>

            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea className="form-control" name="description" value={formData.description} onChange={handleChange} required />
            </div>

            <div className="mb-3">
              <label className="form-label">Duration</label>
              <input type="text" className="form-control" name="duration" value={formData.duration} onChange={handleChange} required />
            </div>

            <div className="mb-3">
              <label className="form-label">Admission Requirements</label>
              <input type="text" className="form-control" name="admissionRequirements" value={formData.admissionRequirements} onChange={handleChange} required />
            </div>

            <div className="mb-3">
              <label className="form-label">Application Deadline</label>
              <input type="date" className="form-control" name="applicationDeadline" value={formData.applicationDeadline} onChange={handleChange} required />
            </div>

            <div className="mb-3">
              <label className="form-label">Program Start Date</label>
              <input type="date" className="form-control" name="programStartDate" value={formData.programStartDate} onChange={handleChange} required />
            </div>

            <div className="mb-3">
              <label className="form-label">Field</label>
              <input type="text" className="form-control" name="field" value={formData.field} onChange={handleChange} required />
            </div>

            <div className="mb-3">
              <label className="form-label">Delivery Type</label>
              <select className="form-select" name="deliveryType" value={formData.deliveryType} onChange={handleChange} required>
                <option value="">Select</option>
                <option value="Online">Online</option>
                <option value="Offline">Offline</option>
                <option value="Hybrid">Hybrid</option>
              </select>
            </div>

            {/* Fix programType to only allow Masters or Undergraduate */}
            <div className="mb-3">
              <label className="form-label">Program Type</label>
              <select className="form-select" name="programType" value={formData.programType} onChange={handleChange} required>
                <option value="">Select</option>
                <option value="Masters">Masters</option>
                <option value="Undergraduate">Undergraduate</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Tuition Fee</label>
              <input type="number" className="form-control" name="tuition" value={formData.tuition} onChange={handleChange} required />
            </div>

            <div className="mb-3">
              <label className="form-label">Country</label>
              <input type="text" className="form-control" name="country" value={formData.country} onChange={handleChange} required />
            </div>

            {/* New field: Scholarship */}
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" name="scholarship" checked={formData.scholarship} onChange={handleChange} />
              <label className="form-check-label">Scholarship Available</label>
            </div>

            {/* New field: Priority Type */}
            <div className="mb-3">
              <label className="form-label">Priority Type</label>
              <select className="form-select" name="priorityType" value={formData.priorityType} onChange={handleChange}>
                <option value="Normal">Normal</option>
                <option value="High">High</option>
              </select>
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-primary px-5 py-2">Create Program</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateProgram;
