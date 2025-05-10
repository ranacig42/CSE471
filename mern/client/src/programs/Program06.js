import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Program06() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="hero d-flex justify-content-center align-items-center text-center text-white"
        style={{
          background: "url('your-image-url.jpg') no-repeat center center/cover",
          height: "60vh",
          backgroundColor: "#17a2b8",
        }}
      >
        <div>
          <h1 className="display-4 font-weight-bold">Master of Science in Software Engineering</h1>
          <p className="lead" style={{ fontSize: "1.5rem" }}>
            Develop advanced software systems with cutting-edge technology.
          </p>
        </div>
      </section>

      {/* Course Overview Section */}
      <section className="container py-5">
        <h2 className="mb-4 text-primary">Course Overview</h2>
        <p>
          This program focuses on both the theoretical and practical aspects of software development, including software design, architecture, testing, and maintenance. The MSc in Software Engineering prepares students to develop complex, reliable, and scalable software solutions.
        </p>
        <p>Key skills you'll gain include:</p>
        <ul>
          <li>Advanced software development and design techniques</li>
          <li>Software testing and quality assurance</li>
          <li>Systems architecture and integration</li>
          <li>Agile methodologies and project management</li>
        </ul>
      </section>

      {/* Why Study Section */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="mb-4 text-primary">Why Study Software Engineering</h2>
          <ol>
            <li>Build a strong foundation in software design and development.</li>
            <li>Learn the latest technologies used in the software industry.</li>
            <li>Prepare for senior software engineering and technical leadership roles.</li>
          </ol>
        </div>
      </section>
    </div>
  );
}

export default Program06;
