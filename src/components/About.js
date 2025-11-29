import React from 'react';

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div>
            <img 
              src="picture.jpeg" 
              alt="Muhammad Ibtisam Ahmad" 
              className="picture"
            />
          </div>
          <div>
            <div className="card">
              <h3>Professional Summary</h3>
              <p>
                Motivated Computer Science graduate with expertise in software development, 
                artificial intelligence, and cybersecurity. Winner of the Russia Open Door 
                Scholarship in Computer and Data Science. Experienced in deep learning, 
                web development, and game design. Passionate about academic research and 
                innovation, aiming to contribute to the field of cybersecurity and data science.
              </p>
            </div>
            <div className="card">
              <h3>Contact Information</h3>
              <p><strong>Location:</strong> Lahore, Pakistan</p>
              <p><strong>Phone:</strong> (+92)-345-9777775</p>
              <p><strong>Email:</strong> ibtisamahmad0051@gmail.com</p>
              <p><strong>LinkedIn:</strong> 
                <a href="https://www.linkedin.com/in/m-ibtisam-ahmad/" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/m-ibtisam-ahmad/
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;