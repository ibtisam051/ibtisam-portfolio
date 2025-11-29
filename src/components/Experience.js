import React from 'react';

const Experience = () => {
  const experiences = [
    {
      company: "Txend",
      position: "Associate Software Engineer",
      period: "Nov 2024 - Current",
      responsibilities: [
        "Contributed to the development of a banking admin panel, designing and implementing responsive email templates using HTML/CSS",
        "Worked as a Data Engineer, performing web scraping from multiple sources and developing Python automation scripts integrated with ChatGPT API",
        "Currently developing a full-stack application with TypeScript-based frontend (React) and Node.js backend",
        "Gained hands-on experience with GitHub version control, databases, debugging tools, and RESTful API integration"
      ]
    },
    {
      company: "StallionByte Pakistan",
      position: "Software Development Intern",
      period: "Mar 2024 - June 2024",
      responsibilities: [
        "Participated in daily stand-up meetings, code reviews, and contributed to feature development and bug fixes",
        "First month: Focused on Software Quality Assurance (SQA)",
        "Last two months: NodeJS Development"
      ]
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        {experiences.map((exp, index) => (
          <div key={index} className="card">
            <h3>{exp.position}</h3>
            <p><strong>{exp.company}</strong> | <em>{exp.period}</em></p>
            <ul>
              {exp.responsibilities.map((resp, i) => (
                <li key={i}>{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;