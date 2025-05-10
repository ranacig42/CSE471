import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Program03() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="hero d-flex justify-content-center align-items-center text-center text-white"
        style={{
          background: "url('your-image-url.jpg') no-repeat center center/cover",
          height: "60vh",
          backgroundColor: "#28a745",
        }}
      >
        <div>
          <h1 className="display-4 font-weight-bold">Master of Science in Computer Science</h1>
          <p className="lead" style={{ fontSize: "1.5rem" }}>
            Advance your software development and engineering skills.
          </p>
        </div>
      </section>

      {/* Course Overview Section */}
      <section className="container py-5">
        <h2 className="mb-4 text-primary">Course Overview</h2>
        <p>
          This program prepares students to become experts in software development, data structures, algorithms, and system programming. The MSc in Computer Science focuses on real-world applications in software engineering, artificial intelligence, and cybersecurity.
        </p>
        <p>Key skills you'll gain include:</p>
        <ul>
          <li>Software design and architecture</li>
          <li>Advanced algorithms and data structures</li>
          <li>Artificial intelligence and machine learning</li>
          <li>Cybersecurity fundamentals</li>
        </ul>
      </section>

      {/* Why Study Section */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="mb-4 text-primary">Why Study Computer Science</h2>
          <ol>
            <li>Master the latest in software development and AI technology.</li>
            <li>Build a strong foundation in both theory and practical applications.</li>
            <li>Work with cutting-edge tools and frameworks used by industry professionals.</li>
          </ol>
        </div>
      </section>
    </div>
  );
}

export default Program03;
