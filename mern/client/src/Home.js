import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      {/* Hero Section with Background Image */}
      <section
        className="hero d-flex justify-content-center align-items-center text-center text-white"
        style={{
          backgroundImage: "url('/homepage.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          position: "relative",
          overflow: "hidden",
          flexDirection: "column",
        }}
      >
        <div className="container">
          <h1 className="display-2 fw-bold mb-4" style={{ color: "#FF0000" }}>
  WELCOME TO GRADGLOBE
</h1>

          <div className="d-flex gap-3 justify-content-center mb-4">
            <a href="/programs" className="btn btn-danger btn-lg px-5 py-3">
              ALL COURSES
            </a>
            <a href="/about" className="btn btn-outline-light btn-lg px-5 py-3">
              READ MORE
            </a>
          </div>

          {/* Quick Links Styled as Circular Icons */}
          <div className="d-flex justify-content-center gap-5 flex-wrap mt-5">
            <div className="text-center">
              <div className="rounded-circle bg-white shadow d-flex align-items-center justify-content-center"
                style={{ width: "100px", height: "100px" }}>
                <img src="/ewtwert.jpg" alt="Contact" style={{ width: "50px" }} />
              </div>
             <a href="/ask-question" className="btn btn-danger btn-lg px-1 py-1 mt-2">
              Contact Us
            </a>
            </div>
            <div className="text-center">
              <div className="rounded-circle bg-white shadow d-flex align-items-center justify-content-center"
                style={{ width: "100px", height: "100px" }}>
                <img src="/admission-icon-simple-creative-element-filled-vector-38217427.jpg" alt="Admission" style={{ width: "50px" }} />
              </div>
              <a href="/submit-application" className="btn btn-danger btn-lg px-1 py-1 mt-2">
              Admission</a>
            </div>
            <div className="text-center">
              <div className="rounded-circle bg-white shadow d-flex align-items-center justify-content-center"
                style={{ width: "100px", height: "100px" }}>
                <img src="/3475156.png" alt="Courses" style={{ width: "50px" }} />
              </div>
              <a href="/programs" className="btn btn-danger btn-lg px-1 py-1 mt-2">
              Programs</a>
    
            </div>
          </div>
        </div>
      </section>

      {/* Featured Programs Section */}
      <section id="programs" className="py-5 bg-danger">
        <div className="container">
          <h2 className="text-center mb-5 display-4 fw-bold text-crimson" style={{ color: "#8494e0" }}>
            Featured Programs
          </h2>
          <div className="row g-3">
            {/* Program 1 */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-lg">
                <div className="card-body">
                  <h5 className="card-title text-crimson">
                    MSc in Data Science and Analytics
                  </h5>
                  <p className="card-text">
                    Learn advanced techniques in data analytics, machine learning, and AI.
                  </p>
                  <Link to="/programs/program01" className="btn btn-crimson">
                    View Details
                  </Link>
                </div>
              </div>
            </div>

            {/* Program 2 */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-lg">
                <div className="card-body">
                  <h5 className="card-title text-crimson">
                    MSc in Business Administration
                  </h5>
                  <p className="card-text">
                    Study advanced business strategies and entrepreneurship with the best mentors.
                  </p>
                  <Link to="/programs/program02" className="btn btn-crimson">
                    View Details
                  </Link>
                </div>
              </div>
            </div>

            {/* Program 3 */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-lg">
                <div className="card-body">
                  <h5 className="card-title text-crimson">
                    MSc in Computer Science
                  </h5>
                  <p className="card-text">
                    Pursue a Master's in Computer Science, specializing in software development and systems programming.
                  </p>
                  <Link to="/programs/program03" className="btn btn-crimson">
                    View Details
                  </Link>
                </div>
              </div>
            </div>

            {/* Program 4 */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-lg">
                <div className="card-body">
                  <h5 className="card-title text-crimson">
                    MSc in Cybersecurity
                  </h5>
                  <p className="card-text">
                    Learn to protect systems and data from growing cyber threats and ensure information security.
                  </p>
                  <Link to="/programs/program04" className="btn btn-crimson">
                    View Details
                  </Link>
                </div>
              </div>
            </div>

            {/* Program 5 */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-lg">
                <div className="card-body">
                  <h5 className="card-title text-crimson">
                    MSc in Artificial Intelligence
                  </h5>
                  <p className="card-text">
                    Dive into machine learning, robotics, and intelligent systems with AI technology.
                  </p>
                  <Link to="/programs/program05" className="btn btn-crimson">
                    View Details
                  </Link>
                </div>
              </div>
            </div>

            {/* Program 6 */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-lg">
                <div className="card-body">
                  <h5 className="card-title text-crimson">
                    MSc in Software Engineering
                  </h5>
                  <p className="card-text">
                    Develop advanced software systems with cutting-edge technology and engineering practices.
                  </p>
                  <Link to="/programs/program06" className="btn btn-crimson">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact and Footer */}
      <section id="contact-footer" className="bg-dark text-white py-5 mt-5">
        <div className="container text-center">
          <div className="contact-info mb-4">
            <h3 className="mb-3" style={{ color: "#007bff" }}>Contact Information</h3>
            <p>Email: mdranamustafa42@gmail.com</p>
            <p>Phone: 01521507248</p>
            <p>Address: BRAC UNIVERSITY NEW CAMPUS</p>
          </div>
          <div className="footer-info mt-4">
            <p>© 2025 GradGlobe. All rights reserved.</p>
            <p>Follow us on social media: 
              <a href="https://www.facebook.com/" className="text-white mx-2">Facebook</a> | 
              <a href="#" className="text-white mx-2">Twitter</a> | 
              <a href="#" className="text-white mx-2">Instagram</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
