import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './UpdateDraftApplication.css'; // Assuming you have a CSS file for styling

const UpdateDraftApplication = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [programs, setPrograms] = useState([]);
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    dob: '',
    phoneNumber: '',
    email: '',
    lastEducationQualification: '',
    cgpa: '',
    programId: '',
    transcript: '',
  });
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [programRes, appRes] = await Promise.all([
          axios.get('http://localhost:1060/api/programs'),
          axios.get(`http://localhost:1060/api/applications/${id}`)
        ]);

        setPrograms(programRes.data);
        const app = appRes.data;
        setFormData({
          firstName: app.firstName || '',
          middleName: app.middleName || '',
          lastName: app.lastName || '',
          dob: app.dob ? app.dob.split('T')[0] : '',
          phoneNumber: app.phoneNumber || '',
          email: app.email || '',
          lastEducationQualification: app.lastEducationQualification || '',
          cgpa: app.cgpa || '',
          programId: app.programId?._id || '',
          transcript: app.transcript || '',
        });
        setLoading(false);
      } catch (err) {
        setMessage('Failed to load application data.');
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (status) => {
    try {
      await axios.put(`http://localhost:1060/api/applications/${id}`, {
        ...formData,
        status,
      });
      setMessage(status === 'submitted' ? 'Application submitted!' : 'Draft updated!');
      if (status === 'submitted') navigate('/applications');
    } catch (err) {
      setMessage('Failed to update application.');
    }
  };

  if (loading) return <div className="text-center mt-5">Loading application...</div>;

  return (
    <div className="submit-application-container">
      <h2>Update Draft Application</h2>
      {message && <div className="alert alert-info">{message}</div>}

      <div className="form-wrapper">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-group-row">
            <input name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" required />
            <input name="middleName" value={formData.middleName} onChange={handleChange} placeholder="Middle Name" />
            <input name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" required />
          </div>
          <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
          <input name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Phone Number" required />
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
          <input name="lastEducationQualification" value={formData.lastEducationQualification} onChange={handleChange} placeholder="Last Education" required />
          <input name="cgpa" type="number" value={formData.cgpa} onChange={handleChange} step="0.01" placeholder="CGPA" required />

          <select name="programId" value={formData.programId} onChange={handleChange} required>
            <option value="">Select Program</option>
            {programs.map(p => <option key={p._id} value={p._id}>{p.name}</option>)}
          </select>

          <input name="transcript" value={formData.transcript} onChange={handleChange} placeholder="Transcript" required />

          <div className="form-actions">
            <button type="button" onClick={() => handleUpdate('draft')}>Save Draft</button>
            <button type="button" onClick={() => handleUpdate('submitted')}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateDraftApplication;
