import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ApplicationList.css';

const ApplicationList = () => {
  const [applications, setApplications] = useState([]);
  const [filters, setFilters] = useState({ gpa: '', qualification: '' });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const res = await axios.get('http://localhost:1060/api/applications');
      setApplications(res.data.filter(app => app.status !== 'draft'));
      setLoading(false);
    } catch (err) {
      console.error('Error fetching applications:', err);
      setLoading(false);
    }
  };

  const handleStatusChange = async (id, status) => {
    try {
      await axios.patch(`http://localhost:1060/api/applications/${id}/status`, { status });
      setApplications(prev =>
        prev.map(app => (app._id === id ? { ...app, status } : app))
      );
    } catch (err) {
      console.error('Error updating status:', err);
    }
  };

  const filteredApplications = applications.filter(app => {
    const gpaMatch = !filters.gpa || app.cgpa >= parseFloat(filters.gpa);
    const qualificationMatch =
      !filters.qualification ||
      app.lastEducationQualification?.toLowerCase().includes(filters.qualification.toLowerCase());
    return gpaMatch && qualificationMatch;
  });

  if (loading) return <p className="text-center mt-5">Loading applications...</p>;

  return (
    <div className="container py-5">
      <h2 className="text-center text-primary fw-bold mb-4">Submitted Applications</h2>

      {/* Filter Bar */}
      <div className="card p-3 shadow-sm mb-4 d-flex flex-wrap flex-row gap-3 justify-content-center align-items-end">
        <div className="d-flex flex-column">
          <label className="form-label">Minimum GPA</label>
          <input 
            className="form-control" 
            type="number" 
            placeholder="e.g. 3.0"
            value={filters.gpa}
            onChange={e => setFilters({ ...filters, gpa: e.target.value })}
          />
        </div>
        <div className="d-flex flex-column">
          <label className="form-label">Qualification</label>
          <input 
            className="form-control" 
            placeholder="e.g. Computer Science"
            value={filters.qualification}
            onChange={e => setFilters({ ...filters, qualification: e.target.value })}
          />
        </div>
      </div>

      {/* Application List */}
      <div className="row g-4">
        {filteredApplications.length === 0 ? (
          <p>No applications match the selected criteria.</p>
        ) : (
          filteredApplications.map(app => (
            <div className="col-md-6" key={app._id}>
              <div className={`application-card shadow-sm rounded-4 p-4 ${app.status}`}>
                <h5 className="fw-semibold">{app.firstName} {app.lastName}</h5>
                <p className="text-muted small mb-1"><strong>Email:</strong> {app.email}</p>
                <p className="text-muted small mb-1"><strong>Phone:</strong> {app.phoneNumber}</p>
                <p className="text-muted small mb-1"><strong>DOB:</strong> {new Date(app.dob).toLocaleDateString()}</p>
                <p className="text-muted small mb-1"><strong>Qualification:</strong> {app.lastEducationQualification}</p>
                <p className="text-muted small mb-1"><strong>GPA:</strong> {app.cgpa}</p>
                <p className="text-muted small mb-1">
                  <strong>Transcript:</strong> <a href={app.transcript} target="_blank" rel="noopener noreferrer">View</a>
                </p>
                <p className="text-muted small mb-1">
                  <strong>Status:</strong>{' '}
                  <span className={`badge bg-${
                    app.status === 'accepted' ? 'success' :
                    app.status === 'rejected' ? 'danger' :
                    app.status === 'waitlisted' ? 'warning' : 'secondary'
                  }`}>
                    {app.status}
                  </span>
                </p>

                <div className="mt-3 d-flex gap-2 justify-content-end">
                  <button className="btn btn-success btn-sm" onClick={() => handleStatusChange(app._id, 'accepted')}>Accept</button>
                  <button className="btn btn-warning btn-sm" onClick={() => handleStatusChange(app._id, 'waitlisted')}>Waitlist</button>
                  <button className="btn btn-danger btn-sm" onClick={() => handleStatusChange(app._id, 'rejected')}>Reject</button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ApplicationList;
