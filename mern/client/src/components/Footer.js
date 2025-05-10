import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        {/* Newsletter Section */}
        <div className="row mb-4">
          <div className="col-12 text-center">
            <h5 className="mb-3">Subscribe to our Newsletter</h5>
            <div className="d-flex justify-content-center gap-2 mb-">
              <input
                type="email"
                className="form-control w-auto"
                placeholder="Email address"
                aria-label="Email address"
              />
              
            </div>
            <div className="d-flex justify-content-center gap-4 mb-">
              <Link to="/terms-conditions" className="text-white text-decoration-none">
                Terms & Conditions
              </Link>
              <Link to="/privacy-policy" className="text-white text-decoration-none">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>

        {/* Services/About/Help Columns */}
        <div className="row border-top border-secondary pt-4">
          <div className="col-md-4">
            <h6>Services</h6>
            <ul className="list-unstyled">
              <li><Link to="/email-marketing" className="text-white text-decoration-none">Email Marketing</Link></li>
              <li><Link to="/campaigns" className="text-white text-decoration-none">Campaigns</Link></li>
              <li><Link to="/branding" className="text-white text-decoration-none">Branding</Link></li>
              <li><Link to="/offline" className="text-white text-decoration-none">Offline</Link></li>
            </ul>
          </div>

          <div className="col-md-4">
            <h6>About</h6>
            <ul className="list-unstyled">
              <li><Link to="/our-story" className="text-white text-decoration-none">Our Story</Link></li>
              <li><Link to="/benefits" className="text-white text-decoration-none">Benefits</Link></li>
              <li><Link to="/team" className="text-white text-decoration-none">Team</Link></li>
              <li><Link to="/careers" className="text-white text-decoration-none">Careers</Link></li>
            </ul>
          </div>

          <div className="col-md-4">
            <h6>Help</h6>
            <ul className="list-unstyled">
              <li><Link to="/faqs" className="text-white text-decoration-none">FAQs</Link></li>
              <li><Link to="/contact-us" className="text-white text-decoration-none">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-4 pt-3 border-top border-secondary">
          <p className="mb-0">&copy; 2025 GradGlobe. All rights reserved by MD RANA MUSTAFA.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;