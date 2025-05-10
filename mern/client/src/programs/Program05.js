import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Program05() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="hero d-flex justify-content-center align-items-center text-center text-white"
        style={{
          background: "url('your-image-url.jpg') no-repeat center center/cover",
          height: "60vh",
          backgroundColor: "#ffc107",
        }}
      >
        <div>
          <h1 className="display-4 font-weight-bold">Master of Science in Artificial Intelligence</h1>
          <p className="lead" style={{ fontSize: "1.5rem" }}>
            Explore intelligent systems and machine learning.
          </p>
        </div>
      </section>

      {/* Course Overview Section */}
      <section className="container py-5">
        <h2 className="mb-4 text-primary">Course Overview</h2>
        <p>
          The MSc in Artificial Intelligence is designed to provide students with a deep understanding of machine learning algorithms, data analysis, and AI applications. It prepares students to develop intelligent systems that solve real-world problems using AI technologies.
        </p>
        <p>Key skills you'll gain include:</p>
        <ul>
          <li>Machine learning and deep learning</li>
          <li>Data processing and analysis</li>
          <li>Natural language processing</li>
          <li>Robotics and autonomous systems</li>
        </ul>
      </section>

      {/* Why Study Section */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="mb-4 text-primary">Why Study Artificial Intelligence</h2>
          <ol>
            <li>Work on cutting-edge AI research and development projects.</li>
            <li>Learn from industry-leading experts in AI technologies.</li>
            <li>Prepare for careers in tech, healthcare, robotics, and more.</li>
          </ol>
        </div>
      </section>
    </div>
  );
}

export default Program05;
