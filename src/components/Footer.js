import React from 'react';
import { FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="social-links">
          <a href="https://www.linkedin.com/in/m-ibtisam-ahmad/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:ibtisamahmad0051@gmail.com">
            <FaEnvelope />
          </a>
          <a href="tel:+923459777775">
            <FaPhone />
          </a>
        </div>
        <p>&copy; 2024 Muhammad Ibtisam Ahmad. All rights reserved.</p>
        <p>Lahore, Pakistan</p>
      </div>
    </footer>
  );
};

export default Footer;