import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ApplicationList.css';

const DraftApplications = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const { data } = await axios.get('http://localhost:1060/api/applications');
        setApplications(data.filter(app => app.status === 'draft'));
        setError('');
      } catch (err) {
        setError(err.response?.data?.error || err.message || 'Failed to load applications');
        console.error('API Error:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchApplications();
  }, []);

  if (loading) return <div className="text-center mt-5">Loading draft applications...</div>;
  if (error) return <div className="alert alert-danger m-4">{error}</div>;

  return (
    <div className="application-list-container">
      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2>Draft Applications</h2>
          <select onChange={(e) => window.location.href = e.target.value}>
            <option value="/drafts">Draft Applications</option>
            <option value="/applications">Submitted Applications</option>
          </select>
        </div>

        {applications.length === 0 ? (
          <p>No draft applications found.</p>
        ) : (
          applications.map(app => (
            <div 
              key={app._id} 
              className="application-card draft"
              onClick={() => window.location.href = `/update-draft/${app._id}`}
              style={{ cursor: 'pointer' }}
            >
              <div className="card-content">
                <h5>{app.firstName || 'New Draft'} {app.lastName || ''}</h5>
                <p><strong>Program:</strong> {app.programId?.name || 'Not selected'}</p>
                <p><strong>Last Updated:</strong> {new Date(app.updatedAt).toLocaleDateString()}</p>
                <div className="card-actions">
                  <button
                    className="edit-button"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.location.href = `/update-draft/${app._id}`;
                    }}
                  >
                    Continue Editing
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default DraftApplications;
