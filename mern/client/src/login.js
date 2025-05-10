import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const trimmedEmail = email.trim().toLowerCase();
    const trimmedPassword = password.trim();

    try {
      const response = await axios.post('http://localhost:1060/api/users/login', {
        email: trimmedEmail,
        password: trimmedPassword
      });

      if (response.status === 200) {
        const user = response.data.user;

        // Navigate based on user role or email
        if (trimmedEmail.includes('authority@')) {
          navigate('/admin/dashboard');
        } else if (trimmedEmail.includes('user')) {
          navigate('/');
        } else {
          navigate('/');
        }
      }
    } catch (err) {
      const msg =
        err.response?.data?.message ||
        err.response?.data?.error ||
        'Login failed. Please try again.';
      setErrorMessage(msg);
      console.error('Login error:', err);
    }
  };

  return (
    <div className="login-container">
      <div className="welcome-section">
        <div className="welcome-content">
          <h1>WELCOME</h1>
          <h2>MD RANA MUSTAFA</h2>
          <p className="tagline">
            To streamline the graduate admission process by building a centralized online platform where universities can list master’s programs and students can search, inquire, and apply efficiently, thereby enhancing visibility and accessibility for both stakeholders.

          </p>
        </div>
      </div>

      <div className="login-section">
        <div className="login-form">
          <h2>Sign in</h2>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
                Remember me
              </label>
              <a href="/forgot-password" className="forgot-password">
                Forgot Password?
              </a>
            </div>

            {errorMessage && (
              <div className="error-message">{errorMessage}</div>
            )}

            <button type="submit" className="signin-btn">
              Sign in
            </button>

            <div className="separator">
              <span>Or</span>
            </div>

            

            <p className="signup-prompt">
              Don't have an account? <a href="/signup">Sign Up</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
