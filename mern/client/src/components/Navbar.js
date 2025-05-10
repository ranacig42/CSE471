import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav 
      className="navbar navbar-expand-lg navbar-dark px-3" 
      style={{ 
        backgroundColor: '##f0f2f5', // Dark navy blue
        borderBottom: '3px solid #A51C30' // Harvard crimson accent
      }}
    >
      <Link 
        className="navbar-brand fw-bold" 
        to="/" 
        style={{
          color: '#A51C30',
          fontSize: '1.5rem',
          letterSpacing: '1px',
          textDecoration: 'underline',
          textDecorationColor: '#A51C30',
          textUnderlineOffset: '8px'
        }}
      >
        GRAD GLOBE
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link 
              className="nav-link" 
              to="/"
              style={{ 
                color: '#A51C30',
                fontWeight: '500',
                
              }}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              className="nav-link" 
              to="/programs"
              style={{ 
                color: '#A51C30',
                fontWeight: '500',
                
              }}
            >
              Programs
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              className="nav-link" 
              to="/about"
              style={{ 
                color: '#A51C30',
                fontWeight: '500',
                
              }}
            >
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              className="nav-link" 
              to="/signup"
              style={{ 
                color: '#ffffff',
                fontWeight: '500',
                backgroundColor: '#A51C30',
                borderRadius: '4px',
                padding: '8px 16px',
                marginLeft: '10px',
                '&:hover': {
                  backgroundColor: '#8a1728'
                }
              }}
            >
              Sign Up
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              className="nav-link" 
              to="/login"
              style={{ 
                color: '#A51C30',
                fontWeight: '500',
                border: '2px solid #A51C30',
                borderRadius: '4px',
                padding: '8px 16px',
                marginLeft: '10px'
              }}
            >
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;