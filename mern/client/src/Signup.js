import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Signup.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    dob: ''
  });
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    const { name, email, password, dob } = formData;

    if (!name || !email || !password || !dob) {
      setErrorMessage('All fields are required');
      return;
    }

    if (!rememberMe) {
      setErrorMessage('You must agree to the Terms & Conditions');
      return;
    }

    try {
      const payload = {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        password: password.trim(),
        dob
      };

      const response = await axios.post('http://localhost:1060/api/users', payload);

      if (response.status === 201) {
        navigate('/login');
      } else {
        setErrorMessage(response.data.message || 'Signup failed. Try again.');
      }
    } catch (error) {
      const msg =
        error.response?.data?.message ||
        error.response?.data?.error ||
        'Failed to create account. Please try again.';
      setErrorMessage(msg);
      console.error('Signup error:', error);
    }
  };

  return (
    <div className="auth-container">
      <div className="welcome-section">
        <div className="welcome-content">
          <h1>WELCOME</h1>
          <h2>MD RANA MUSTAFA</h2>
          <p className="tagline">
            To streamline the graduate admission process by building a centralized online platform where universities can list master’s programs and students can search, inquire, and apply efficiently, thereby enhancing visibility and accessibility for both stakeholders.

          </p>
        </div>
      </div>

      <div className="auth-section">
        <div className="auth-form">
          <h2>Create Account</h2>

          {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

          <form onSubmit={handleSignup}>
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
              {/* ✅ Admin guidance message */}
              <p className="text-muted small mt-2">
                <em>University authorities should use their official email like <strong>authority@university.edu</strong></em>
              </p>
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label>Date of Birth</label>
              <input
                type="date"
                value={formData.dob}
                onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                required
              />
            </div>

            <div className="form-options">
              <label className="remember-me">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                I agree to the Terms & Conditions
              </label>
            </div>

            <button type="submit" className="auth-btn">
              Sign Up
            </button>

            <div className="separator">
              <span>Or</span>
            </div>

            <div className="social-auth">
              <button type="button" className="social-btn google">
                Continue with Google
              </button>
              <button type="button" className="social-btn facebook">
                Continue with Facebook
              </button>
            </div>

            <p className="auth-prompt">
              Already have an account? <a href="/login">Sign In</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
