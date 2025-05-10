import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AskQuestion.css';

const AskQuestion = () => {
  const [programs, setPrograms] = useState([]);
  const [form, setForm] = useState({ name: '', email: '', question: '', programId: '' });
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:1060/api/programs')
      .then(res => setPrograms(res.data))
      .catch(() => setPrograms([]));
  }, []);

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.question || !form.programId) {
      setMessage('Please fill out all fields before submitting.');
      return;
    }

    try {
      await axios.post('http://localhost:1060/api/questions', form);
      setMessage('Your question was submitted successfully.');
      setForm({ name: '', email: '', question: '', programId: '' });
    } catch (err) {
      console.error('Error:', err.response?.data || err.message);
      setMessage('Error submitting your question.');
    }
  };

  return (
    <div className="ask-question-wrapper">
      <div className="ask-question-card">
        <h2>Have a<br />Question?</h2>

        <p className="subtitle">Ask us anything about admissions.</p>

        <div className="custom-input">
          <input
            type="text"
            placeholder="WRITE YOUR QUESTION"
            value={form.question}
            onChange={(e) => setForm({ ...form, question: e.target.value })}
          />
          <span className="arrow">➤</span>
        </div>

        <div className="custom-input">
          <input
            type="text"
            placeholder="NAME:"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <span className="arrow">➤</span>
        </div>

        <div className="custom-input">
          <input
            type="email"
            placeholder="EMAIL:"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <span className="arrow">➤</span>
        </div>

        <div className="custom-input">
          <select
            value={form.programId}
            onChange={(e) => setForm({ ...form, programId: e.target.value })}
          >
            <option value="">SELECT PROGRAM</option>
            {programs.map((p) => (
              <option key={p._id} value={p._id}>{p.name}</option>
            ))}
          </select>
          <span className="arrow">➤</span>
        </div>

        <button className="submit-button" onClick={handleSubmit}>SUBMIT</button>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
};

export default AskQuestion;
