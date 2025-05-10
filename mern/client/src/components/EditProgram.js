import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import './EditProgram.css';  // Ensure the new CSS file is imported

const EditProgram = () => {
  const [program, setProgram] = useState({
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

  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:1060/api/programs/${id}`)
      .then(response => {
        setProgram(response.data);
      })
      .catch(error => {
        setErrorMessage('Failed to fetch program data');
        console.error(error);
      });
  }, [id]);

  const handleChange = (e) => {
    setProgram({
      ...program,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.put(`http://localhost:1060/api/programs/${id}`, program)
      .then(response => {
        alert('Program updated successfully!');
        navigate('/admin/dashboard');
      })
      .catch(error => {
        setErrorMessage('Failed to update program');
        console.error(error);
      });
  };

  return (
    <div className="edit-program-container">
      <div className="form-container">
        <h2>Edit Program</h2>  
        {errorMessage && <div className="error-message">{errorMessage}</div>}

        <form onSubmit={handleSubmit} className="edit-form">
          <div className="input-group">
            <label htmlFor="name">Program Name</label>
            <input
              type="text"
              name="name"
              value={program.name}
              onChange={handleChange}
              placeholder="Enter program name"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              value={program.description}
              onChange={handleChange}
              placeholder="Enter program description"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="duration">Duration</label>
            <input
              type="text"
              name="duration"
              value={program.duration}
              onChange={handleChange}
              placeholder="Enter program duration"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="admissionRequirements">Admission Requirements</label>
            <input
              type="text"
              name="admissionRequirements"
              value={program.admissionRequirements}
              onChange={handleChange}
              placeholder="Enter admission requirements"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="applicationDeadline">Application Deadline</label>
            <input
              type="date"
              name="applicationDeadline"
              value={program.applicationDeadline}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="programStartDate">Program Start Date</label>
            <input
              type="date"
              name="programStartDate"
              value={program.programStartDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="field">Field of Study</label>
            <input
              type="text"
              name="field"
              value={program.field}
              onChange={handleChange}
              placeholder="Enter field of study"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="deliveryType">Delivery Type</label>
            <input
              type="text"
              name="deliveryType"
              value={program.deliveryType}
              onChange={handleChange}
              placeholder="Enter delivery type"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="programType">Program Type</label>
            <select
              name="programType"
              value={program.programType}
              onChange={handleChange}
              required
            >
              <option value="Masters">Masters</option>
              <option value="Undergraduate">Undergraduate</option>
            </select>
          </div>

          <button type="submit" className="submit-btn">Update Program</button>
        </form>
      </div>
    </div>
  );
};

export default EditProgram;
