import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateProgram = () => {
  const { id } = useParams(); // Get program ID from URL
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    duration: '',
    admissionRequirements: '',
    applicationDeadline: '',
    programStartDate: '',
    field: '',
    deliveryType: '',
    programType: ''
  });

  useEffect(() => {
    // Fetch the current program data by ID
    const fetchProgram = async () => {
      try {
        const res = await axios.get(`http://localhost:1060/api/programs/${id}`);
        setFormData(res.data);
      } catch (error) {
        console.error('Error fetching program data:', error);
      }
    };
    fetchProgram();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`http://localhost:1060/api/programs/${id}`, formData);
      if (res.status === 200) {
        navigate('/programs');  // Redirect to the program list page after update
      }
    } catch (error) {
      console.error('Error updating program:', error);
    }
  };

  return (
    <div className="container py-5">
      <h2 className="text-center text-primary mb-4">Update Program</h2>
      <form onSubmit={handleSubmit}>
        {/* Program Name */}
        <div className="mb-3">
          <label className="form-label" htmlFor="name">Program Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Program Description */}
        <div className="mb-3">
          <label className="form-label" htmlFor="description">Program Description</label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            rows="3"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        {/* Duration */}
        <div className="mb-3">
          <label className="form-label" htmlFor="duration">Duration</label>
          <input
            type="text"
            className="form-control"
            id="duration"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            required
          />
        </div>

        {/* Admission Requirements */}
        <div className="mb-3">
          <label className="form-label" htmlFor="admissionRequirements">Admission Requirements</label>
          <textarea
            className="form-control"
            id="admissionRequirements"
            name="admissionRequirements"
            rows="2"
            value={formData.admissionRequirements}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        {/* Application Deadline */}
        <div className="mb-3">
          <label className="form-label" htmlFor="applicationDeadline">Application Deadline</label>
          <input
            type="date"
            className="form-control"
            id="applicationDeadline"
            name="applicationDeadline"
            value={formData.applicationDeadline}
            onChange={handleChange}
            required
          />
        </div>

        {/* Program Start Date */}
        <div className="mb-3">
          <label className="form-label" htmlFor="programStartDate">Program Start Date</label>
          <input
            type="date"
            className="form-control"
            id="programStartDate"
            name="programStartDate"
            value={formData.programStartDate}
            onChange={handleChange}
            required
          />
        </div>

        {/* Field */}
        <div className="mb-3">
          <label className="form-label" htmlFor="field">Field of Study</label>
          <input
            type="text"
            className="form-control"
            id="field"
            name="field"
            value={formData.field}
            onChange={handleChange}
            required
          />
        </div>

        {/* Delivery Type */}
        <div className="mb-3">
          <label className="form-label" htmlFor="deliveryType">Delivery Type</label>
          <select
            className="form-select"
            id="deliveryType"
            name="deliveryType"
            value={formData.deliveryType}
            onChange={handleChange}
            required
          >
            <option value="">Select Delivery Type</option>
            <option value="On-Campus">On-Campus</option>
            <option value="Online">Online</option>
          </select>
        </div>

        {/* Program Type */}
        <div className="mb-3">
          <label className="form-label" htmlFor="programType">Program Type</label>
          <select
            className="form-select"
            id="programType"
            name="programType"
            value={formData.programType}
            onChange={handleChange}
            required
          >
            <option value="">Select Program Type</option>
            <option value="Masters">Masters</option>
            <option value="Undergraduate">Undergraduate</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">Update Program</button>
      </form>
    </div>
  );
};

export default UpdateProgram;
