import React from 'react';

const ProjectCard = ({ title, date, description, techStack, repoLink }) => (
  <div className="content-section project-card">
    <h3>{title}</h3>
    <p className="project-date">{date}</p>
    <p className="project-description">{description}</p>
    <div className="tech-stack">
      <strong>Tech Stack:</strong> {techStack}
    </div>
    <a href={repoLink} target="_blank" rel="noopener noreferrer" className="repo-link">
      View on GitHub
    </a>
  </div>
);

const Projects = () => (
  <div className="projects-container">
    <h2>My Projects</h2>
    <ProjectCard
      title="OneNote AI"
      date="April 2024 – June 2024"
      description="Developed a multi-agent AI model for customized note generation. Utilized Google Gemini for diverse functionalities, implemented custom tools for web scraping, structuring information, and generating PDFs. Used Docker and asynchronous programming for smooth API integration."
      techStack="Python, Crew AI, Google Gemini, Serper API, Langchain, Docker"
      repoLink="https://github.com/AKomplished-bug/oneNote_AI"
    />
    <ProjectCard
      title="KTU Toolkit"
      date="Dec 2023 – May 2024"
      description="Created an academic support system for KTU University students. Implemented SGPA prediction using Random Forest, CGPA goal setting with constraint programming, and provided detailed analytics and study materials based on semester results. Developed a web API and integrated a Telegram bot for easy access."
      techStack="React.js, Express.js, Node.js, MongoDB, Random Forest, aiogram, botfather"
      repoLink="https://github.com/AKomplished-bug/KTU_Studymaterial_Telegrambot"
    />
  </div>
);

export default Projects;