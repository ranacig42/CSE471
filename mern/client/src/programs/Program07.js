import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Program07() {
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
          <h1 className="display-4 font-weight-bold">Master of Science in Mechanical Engineering</h1>
          <p className="lead" style={{ fontSize: "1.5rem" }}>
            Solve mechanical engineering challenges with innovative solutions.
          </p>
        </div>
      </section>

      {/* Course Overview Section */}
      <section className="container py-5">
        <h2 className="mb-4 text-primary">Course Overview</h2>
        <p>
          The MSc in Mechanical Engineering provides advanced knowledge in mechanics, dynamics, thermodynamics, and fluid dynamics. The program focuses on designing, developing, and analyzing mechanical systems and devices, while integrating modern technologies like robotics and AI.
        </p>
        <p>Key skills you'll gain include:</p>
        <ul>
          <li>Advanced mechanical system design and analysis</li>
          <li>Thermodynamics and heat transfer</li>
          <li>Fluid mechanics and control systems</li>
          <li>Robotics and automation systems</li>
        </ul>
      </section>

      {/* Why Study Section */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="mb-4 text-primary">Why Study Mechanical Engineering</h2>
          <ol>
            <li>Build a solid foundation in the physical and mathematical principles of engineering.</li>
            <li>Work on real-world mechanical system designs and problem-solving.</li>
            <li>Prepare for careers in industries like aerospace, automotive, robotics, and manufacturing.</li>
          </ol>
        </div>
      </section>
    </div>
  );
}

export default Program07;
