import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './SubmitApplication.css';

const SubmitApplication = () => {
  const { id } = useParams();
  const [programs, setPrograms] = useState([]);
  const [selectedProgram, setSelectedProgram] = useState('');
  const [userData, setUserData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    dob: '',
    phoneNumber: '',
    email: '',
    lastEducationQualification: '',
    cgpa: '',
    programType: '',
  });
  const [transcript, setTranscript] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fields = [
      userData.firstName,
      userData.middleName,
      userData.lastName,
      userData.dob,
      userData.phoneNumber,
      userData.email,
      userData.lastEducationQualification,
      userData.cgpa,
      selectedProgram,
      transcript,
    ];
    const filled = fields.filter(field => field?.toString().trim() !== '').length;
    setProgress(Math.round((filled / fields.length) * 100));
  }, [userData, selectedProgram, transcript]);

  useEffect(() => {
    axios.get('http://localhost:1060/api/programs')
      .then(res => setPrograms(res.data))
      .catch(() => setErrorMessage('Failed to fetch programs'));
  }, []);

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:1060/api/applications/${id}`)
        .then(res => {
          const app = res.data;
          setUserData({
            firstName: app.firstName || '',
            middleName: app.middleName || '',
            lastName: app.lastName || '',
            dob: app.dob ? app.dob.split('T')[0] : '',
            phoneNumber: app.phoneNumber || '',
            email: app.email || '',
            lastEducationQualification: app.lastEducationQualification || '',
            cgpa: app.cgpa || '',
            programType: '',
          });
          setSelectedProgram(app.programId?._id || '');
          setTranscript(app.transcript || '');
        })
        .catch(() => setErrorMessage('Failed to fetch draft application'));
    }
  }, [id]);

  const handleInputChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (isDraft = false) => {
    setErrorMessage('');
    setSuccessMessage('');
    setIsLoading(true);

    if (!isDraft && progress < 100) {
      setErrorMessage('Please complete all required fields before submitting');
      setIsLoading(false);
      return;
    }

    const applicationData = {
      ...userData,
      programId: selectedProgram,
      transcript,
      status: isDraft ? 'draft' : 'submitted'
    };

    try {
      if (id) {
        await axios.put(`http://localhost:1060/api/applications/${id}`, applicationData);
      } else {
        await axios.post('http://localhost:1060/api/applications', {
          ...applicationData,
          userId: 'defaultUserId'
        });
      }
      setSuccessMessage(isDraft ? 'Draft saved successfully!' : 'Application submitted successfully!');
    } catch (error) {
      console.error('Submission error:', error);
      setErrorMessage(error.response?.data?.error || 'Submission failed');
    } finally {
      setIsLoading(false);
    }
  };

  const ProgressCircle = () => {
    const radius = 60;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference * (1 - progress / 100);
    return (
      <div className="progress-container">
        <svg width="150" height="150">
          <circle className="progress-background" cx="75" cy="75" r={radius} strokeWidth="10" />
          <circle
            className="progress-bar"
            cx="75"
            cy="75"
            r={radius}
            strokeWidth="10"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            transform="rotate(-90 75 75)"
          />
          <text x="50%" y="50%" className="progress-text" dominantBaseline="middle" textAnchor="middle">
            {progress}%
          </text>
        </svg>
      </div>
    );
  };

  return (
    <div className="submit-application-container">
      <div className="form-wrapper">
        <form onSubmit={(e) => e.preventDefault()}>
          <h2>{id ? 'Edit Draft Application' : 'Submit Application'}</h2>

          {errorMessage && <div className="error-message">{errorMessage}</div>}
          {successMessage && <div className="success-message">{successMessage}</div>}

          <div className="form-group-row">
            <div className="form-group">
              <label>First Name</label>
              <input type="text" name="firstName" value={userData.firstName} onChange={handleInputChange} required />
            </div>
            <div className="form-group">
              <label>Middle Name</label>
              <input type="text" name="middleName" value={userData.middleName} onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input type="text" name="lastName" value={userData.lastName} onChange={handleInputChange} required />
            </div>
          </div>

          <div className="form-group">
            <label>Date of Birth</label>
            <input type="date" name="dob" value={userData.dob} onChange={handleInputChange} required />
          </div>

          <div className="form-group-row">
            <div className="form-group">
              <label>Phone Number</label>
              <input type="text" name="phoneNumber" value={userData.phoneNumber} onChange={handleInputChange} required />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" name="email" value={userData.email} onChange={handleInputChange} required />
            </div>
          </div>

          <div className="form-group-row">
            <div className="form-group">
              <label>Last Education Qualification</label>
              <input type="text" name="lastEducationQualification" value={userData.lastEducationQualification} onChange={handleInputChange} required />
            </div>
            <div className="form-group">
              <label>CGPA</label>
              <input type="number" step="0.01" name="cgpa" value={userData.cgpa} onChange={handleInputChange} required min="0" max="4" />
            </div>
          </div>

          <div className="form-group">
            <label>Select Program</label>
            <select value={selectedProgram} onChange={(e) => setSelectedProgram(e.target.value)} required>
              <option value="">Select a program</option>
              {programs.map((program) => (
                <option key={program._id} value={program._id}>{program.name}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Transcript (any text)</label>
            <input
              type="text"
              name="transcript"
              placeholder="Paste transcript text or link"
              value={transcript}
              onChange={(e) => setTranscript(e.target.value)}
              required
            />
          </div>

          <div className="form-actions">
            <button type="button" className="draft-button" onClick={() => handleSubmit(true)}>Save as Draft</button>
            <button
              type="button"
              className="submit-button"
              onClick={() => handleSubmit(false)}
              disabled={progress < 100 || isLoading}
            >
              {isLoading ? 'Submitting...' : 'Submit Application'}
            </button>
          </div>
        </form>
      </div>

      <ProgressCircle />
    </div>
  );
};

export default SubmitApplication;
