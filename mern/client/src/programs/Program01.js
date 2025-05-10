import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Program01() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="hero d-flex justify-content-center align-items-center text-center text-white"
        style={{
          background: "url('https://ibb.co.com/bRY20QbB') no-repeat center center/cover",
          height: "60vh",
          backgroundColor: "#007bff",
        }}
      >
        <div>
          <h1 className="display-4 font-weight-bold">Master of Science in Data Science and Analytics</h1>
          <p className="lead" style={{ fontSize: "1.5rem" }}>
            Dive into big data, machine learning, and real-world analytics.
          </p>
        </div>
      </section>

      {/* Course Overview Section */}
      <section className="container py-5">
        <h2 className="mb-4 text-primary">Course Overview</h2>
        <p>
          Data is all around us. Every day, we gather and keep a greater variety and quantity of data—from the most basic retail transactions to personal medical records. The demand for data experts is growing rapidly. This program provides the knowledge and skills required to succeed in commercial, government, healthcare, and environmental sectors.
        </p>
        <p>Key skills you'll gain include:</p>
        <ul>
          <li>Analyzing structured and unstructured data</li>
          <li>Working with large datasets</li>
          <li>Critically evaluating data results in context</li>
          <li>Deriving insights from complex data</li>
        </ul>
        <p>
          The program integrates Mathematics, Statistics, Computer Science, Business, and Economics to prepare students for varied data science careers.
        </p>

        <table className="table table-bordered mt-4">
          <tbody>
            <tr>
              <th scope="row">Duration of the Program</th>
              <td>Usual duration: 1 year 4 months (can be extended up to 5 years)</td>
            </tr>
            <tr>
              <th scope="row">Total Credit Hours</th>
              <td>40 Credits</td>
            </tr>
            <tr>
              <th scope="row">Number of Courses</th>
              <td>12 Courses (11 theory: 11×3 = 33 credits, 1 research project: 1×7 = 7 credits)</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Why Study Section */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="mb-4 text-primary">Why Study at EWU</h2>
          <ol>
            <li>Learn from globally renowned faculty and researchers in data science and analytics.</li>
            <li>Advance your practical and theoretical skills in key data science areas.</li>
            <li>
              Customize your degree with electives such as machine learning for finance, AI, deep learning, and more.
            </li>
            <li>
              Apply your knowledge to real-world problems through a capstone research project.
            </li>
            <li>
              Access excellent facilities including libraries, labs, and computing equipment to support your learning.
            </li>
          </ol>
        </div>
      </section>

      {/* Contact & Footer Section (Reused) */}
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

export default Program01;
