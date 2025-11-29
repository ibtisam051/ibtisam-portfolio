import React from 'react';

const Skills = () => {
  const skillsData = {
    "Programming Languages": ["Python", "JavaScript", "TypeScript", "HTML", "CSS"],
    "Frameworks & Libraries": ["React.js", "Node.js", "Express.js", "Flask"],
    "AI & Machine Learning": ["Deep Learning", "Computer Vision", "OpenCV", "MediaPipe"],
    "Cybersecurity": ["Software Security", "Ethical Hacking Fundamentals"],
    "Databases": ["MongoDB", "MySQL"],
    "Tools": ["Git", "GitHub", "Postman", "Docker"]
  };

  const honors = [
    "Winner: Russia Open Door Scholarship – Computer & Data Science",
    "3rd Place: Game Design Competition – Designed an educational board game",
    "Samsung Innovation Campus AI Certification",
    "Microsoft AI-900 Certification"
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Skills & Honors</h2>
        
        <div className="skills-grid">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div key={category} className="skill-category">
              <h3>{category}</h3>
              <ul className="skill-list">
                {skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="card">
          <h3>Honors & Awards</h3>
          <ul>
            {honors.map((honor, index) => (
              <li key={index}>{honor}</li>
            ))}
          </ul>
        </div>

        <div className="card">
          <h3>Professional Memberships & Leadership</h3>
          <ul>
            <li>Member: Association for Computing Machinery (ACM)</li>
            <li>Ambassador: SEE Lahore (Largest Student Expo in Lahore)</li>
            <li>Team Lead: Game Design Competition – Managed team for Unity-based educational game</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;