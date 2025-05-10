import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Program02() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="hero d-flex justify-content-center align-items-center text-center text-white"
        style={{
          background: "url('your-image-url.jpg') no-repeat center center/cover",
          height: "60vh",
          backgroundColor: "#007bff",
        }}
      >
        <div>
          <h1 className="display-4 font-weight-bold">Master of Science in Business Administration</h1>
          <p className="lead" style={{ fontSize: "1.5rem" }}>
            Enhance your leadership skills and business knowledge.
          </p>
        </div>
      </section>

      {/* Course Overview Section */}
      <section className="container py-5">
        <h2 className="mb-4 text-primary">Course Overview</h2>
        <p>
          This program provides students with an in-depth understanding of business operations, leadership, and strategic management. The MSc in Business Administration prepares graduates to lead organizations in an increasingly global and digital business environment.
        </p>
        <p>Key skills you'll gain include:</p>
        <ul>
          <li>Strategic decision-making</li>
          <li>Effective leadership and management techniques</li>
          <li>Financial analysis and reporting</li>
          <li>Human resource management</li>
        </ul>
      </section>

      {/* Why Study Section */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="mb-4 text-primary">Why Study Business Administration</h2>
          <ol>
            <li>Learn how to lead and manage businesses globally.</li>
            <li>Develop advanced financial, marketing, and organizational skills.</li>
            <li>Gain hands-on experience through case studies and real-world projects.</li>
            <li>Prepare for top managerial and executive roles.</li>
          </ol>
        </div>
      </section>
    </div>
  );
}

export default Program02;
