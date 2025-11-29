import React from 'react';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Central Punjab, Lahore, Pakistan",
      period: "Oct 2020 – Aug 2024",
      details: [
        "CGPA: 3.56/4.00",
        "Thesis: Multimodal 3D Brain Tumor Segmentation Using Deep Learning",
        "Developed a 3D U-Net model achieving 83% IoU score",
        "Utilized BraST dataset with multiple MRI modalities (T1ce, T2ce, FLAIR)"
      ]
    },
    {
      degree: "FSc Pre-Medical",
      institution: "Government Graduate College of Science, Lahore, Pakistan",
      period: "Sep 2017 – Sep 2019",
      details: ["Final Grade: A+"]
    },
    {
      degree: "Matriculation (Science)",
      institution: "LDA Model Higher Secondary School, Lahore, Pakistan",
      period: "Sep 2015 – Aug 2017",
      details: ["Final Grade: A+"]
    }
  ];

  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        {educationData.map((edu, index) => (
          <div key={index} className="card">
            <h3>{edu.degree}</h3>
            <p><strong>{edu.institution}</strong></p>
            <p><em>{edu.period}</em></p>
            <ul>
              {edu.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;