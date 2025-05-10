import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Program04() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="hero d-flex justify-content-center align-items-center text-center text-white"
        style={{
          background: "url('your-image-url.jpg') no-repeat center center/cover",
          height: "60vh",
          backgroundColor: "#dc3545",
        }}
      >
        <div>
          <h1 className="display-4 font-weight-bold">Master of Science in Cybersecurity</h1>
          <p className="lead" style={{ fontSize: "1.5rem" }}>
            Safeguard critical information in the digital world.
          </p>
        </div>
      </section>

      {/* Course Overview Section */}
      <section className="container py-5">
        <h2 className="mb-4 text-primary">Course Overview</h2>
        <p>
          The MSc in Cybersecurity program covers a wide range of security technologies and tools, preparing students to defend organizations against cyber threats. From network security to digital forensics, this program provides the expertise required to secure digital infrastructures.
        </p>
        <p>Key skills you'll gain include:</p>
        <ul>
          <li>Network security and risk management</li>
          <li>Digital forensics and incident response</li>
          <li>Cryptography and secure communication protocols</li>
          <li>Security policy and compliance management</li>
        </ul>
      </section>

      {/* Why Study Section */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="mb-4 text-primary">Why Study Cybersecurity</h2>
          <ol>
            <li>Be at the forefront of defending against growing cyber threats.</li>
            <li>Learn from experts with experience in the industry.</li>
            <li>Gain practical skills by working on real-world cybersecurity problems.</li>
          </ol>
        </div>
      </section>
    </div>
  );
}

export default Program04;
