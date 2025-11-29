import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Multimodal 3D Brain Tumor Segmentation",
      description: "Final Year Project - Developed a deep learning model for brain tumor segmentation using MRI modalities.",
      achievements: [
        "Achieved 83% IoU score, improving model accuracy through multimodal input",
        "Deployed the model as a web application using Flask"
      ],
      technologies: ["Python", "Deep Learning", "Flask", "3D U-Net", "MRI"]
    },
    {
      title: "AI Fitness Trainer",
      description: "Built an AI-powered fitness application for real-time posture correction.",
      achievements: [
        "Real-time posture correction using MediaPipe and OpenCV",
        "Full-stack solution with React.js, Node.js, and Python"
      ],
      technologies: ["React.js", "Node.js", "Python", "MediaPipe", "OpenCV"]
    },
    {
      title: "JWT Authentication & Node-React Integration",
      description: "Designed and implemented secure authentication system.",
      achievements: [
        "JWT-based authentication for secure user login",
        "Integrated Node.js backend with React.js frontend"
      ],
      technologies: ["React.js", "Node.js", "JWT", "Authentication"]
    },
    {
      title: "Banking Admin Panel",
      description: "Created responsive email templates for banking admin panel.",
      achievements: [
        "Responsive HTML email templates",
        "UI/UX optimization and cross-client compatibility"
      ],
      technologies: ["HTML", "CSS", "UI/UX", "Email Templates"]
    },
    {
      title: "Data Engineering & AI Integration",
      description: "Web scraping and AI-powered data processing system.",
      achievements: [
        "Web scraping from multiple sources with Python scripts",
        "Integrated ChatGPT API for automated summarization"
      ],
      technologies: ["Python", "Web Scraping", "ChatGPT API", "Automation"]
    },
    {
      title: "Workflow Management Website",
      description: "Building a comprehensive workflow management solution.",
      achievements: [
        "TypeScript frontend with React",
        "Node.js backend with scalable architecture"
      ],
      technologies: ["TypeScript", "React", "Node.js", "API Integration"]
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul>
                  {project.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
                <div className="project-tech">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;