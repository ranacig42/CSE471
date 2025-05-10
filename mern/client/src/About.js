import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero bg-primary text-white py-5">
        <div className="container">
          <h1 className="display-4 mb-4">About GradGlobe</h1>
          <p className="lead">
            GradGlobe is one of the world's leading admission portals, connecting students with 
            top universities globally. Our platform offers a secure, efficient, and community-driven 
            environment for academic planning in the digital age, serving students in 150+ countries.
          </p>
        </div>
      </section>

      {/* Planning Section */}
      <section className="planning-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-13">
              <h2 className="mb-10">Your Gateway to Global Education</h2>
              <p className="text-muted">
                With over 50,000 academic programs from 2,000+ institutions, GradGlobe provides 
                an admission experience that's second to none. Our platform is designed with future-readiness 
                in mind, offering smart filters, AI-driven recommendations, and real-time application 
                tracking to maximize your admission success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Section */}
      <section className="engagement-section bg-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="mb-10">Join Our Community</h2>
              <p className="text-muted">
                GradGlobe is more than a portal - it's a global education community. Access exclusive 
                webinars, connect with alumni mentors, participate in virtual education fairs, and join 
                specialized interest groups. Our platform also offers scholarship matching and visa 
                assistance programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="stats-section py-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <div className="stat-number display-4">500K+</div>
              <div className="stat-text">Successful Applications</div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="stat-number display-4">2K+</div>
              <div className="stat-text">Partner Institutions</div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="stat-number display-4">150+</div>
              <div className="stat-text">Countries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="highlights-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-4">
              <h3>AI-POWERED MATCHING</h3>
              <p>Smart algorithms connecting students with ideal programs</p>
            </div>
            <div className="col-md-4 mb-4">
              <h3>REAL-TIME TRACKING</h3>
              <p>24/7 application status updates and deadline reminders</p>
            </div>
            <div className="col-md-4 mb-4">
              <h3>EXPERT SUPPORT</h3>
              <p>500+ certified admission consultants available on-demand</p>
            </div>
          </div>
        </div>
      </section>

      {/* 👥 Our Team Section */}
      <section className="team-section py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Meet Our Team</h2>
          <div className="row text-center">
            <div className="col-md-4">
              <img src="/487376519_1029692702364460_1628482016046440993_n.jpg" alt="Team Member 1" className="img-fluid rounded-circle mb-3" width="150" height="150" />
              <h5>MD RANA MUSTAFA</h5>
              <p className="text-muted">Founder & CEO</p>
            </div>
            <div className="col-md-4">
              <img src="/490704708_3862145210693003_5534179421985031385_n.jpg" alt="Team Member 2" className="img-fluid rounded-circle mb-3" width="150" height="150" />
              <h5>Md Nazibul Bashar Chowdhury</h5>
              <p className="text-muted">Chief Technology Officer</p>
            </div>
            <div className="col-md-4">
              <img src="/257418481_1136157723458029_5116009607649167551_n.jpg" alt="Team Member 3" className="img-fluid rounded-circle mb-3" width="150" height="150" />
              <h5>Saib Saleh Nabil</h5>
              <p className="text-muted">Head of Student Services</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
