import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [programs, setPrograms] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:1060/api/programs')
      .then(response => setPrograms(response.data))
      .catch(error => {
        setErrorMessage('Failed to fetch programs');
        console.error(error);
      });

    axios.get('http://localhost:1060/api/questions')
      .then(response => setQuestions(response.data))
      .catch(error => {
        console.error('Failed to fetch questions:', error);
      });
  }, []);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this program?')) {
      axios.delete(`http://localhost:1060/api/programs/${id}`)
        .then(() => {
          setPrograms(programs.filter(program => program._id !== id));
          alert('Program deleted successfully!');
        })
        .catch(error => {
          setErrorMessage('Failed to delete program');
          console.error(error);
        });
    }
  };

  return (
    <div className="admin-dashboard-container">
      {/* Side Navigation Bar */}
      <div className="side-nav">
        <Link to="/admin/dashboard">Dashboard</Link>
        <Link to="/programs">Programs</Link>
        <Link to="/applications">Applications</Link>
        <Link to="/admin/settings">Settings</Link>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h2>Admin Dashboard</h2>
        {errorMessage && <div className="error-message">{errorMessage}</div>}

        {/* Programs Section */}
        <div className="programs-section">
          <h3>Programs</h3>
          <div className="program-list">
            {programs.length > 0 ? (
              programs.map((program) => (
                <div className="program-card" key={program._id}>
                  <h4>{program.name}</h4>
                  <p>{program.description}</p>
                  <div className="action-btns">
                    <Link to={`/edit-program/${program._id}`} className="edit-btn">Edit</Link>
                    <button onClick={() => handleDelete(program._id)} className="delete-btn">Delete</button>
                  </div>
                </div>
              ))
            ) : (
              <p>No programs available.</p>
            )}
          </div>
        </div>

        {/* Admission Questions Section */}
        <div className="admission-questions">
          <h3>Admission Questions</h3>
          {questions.length > 0 ? (
            questions.map((q) => (
              <div key={q._id} className="question-card">
                <p><strong>Name:</strong> {q.name}</p>
                <p><strong>Email:</strong> {q.email}</p>
                <p><strong>Program:</strong> {q.programId?.name || 'N/A'}</p>
                <p><strong>Question:</strong> {q.question}</p>
                <p><strong>Submitted:</strong> {new Date(q.createdAt).toLocaleString()}</p>
              </div>
            ))
          ) : (
            <p>No admission questions submitted yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
