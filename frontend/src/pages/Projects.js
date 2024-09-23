import React from 'react';

const ProjectCard = ({ title, date, description, techStack, repoLink, repoLinkText }) => (
  <div className="content-section project-card">
    <h3>{title}</h3>
    <p className="project-date">{date}</p>
    <p className="project-description">{description}</p>
    <div className="tech-stack">
      <strong>Tech Stack:</strong> {techStack}
    </div>
    <a href={repoLink} target="_blank" rel="noopener noreferrer" className="repo-link">
      {repoLinkText}
    </a>
  </div>
);

const Projects = () => {
  const projectData = [
    {
      title: "OneNote AI",
      date: "April 2024 – June 2024",
      description: "Developed a multi-agent AI model for customized note generation. Utilized Google Gemini for diverse functionalities, implemented custom tools for web scraping, structuring information, and generating PDFs. Used Docker and asynchronous programming for smooth API integration.",
      techStack: "Python, Crew AI, Google Gemini, Serper API, Langchain, Docker",
      repoLink: "https://github.com/AKomplished-bug/oneNote_AI",
      repoLinkText: "View on GitHub"
    },
    {
      title: "KTU Toolkit",
      date: "Dec 2023 – May 2024",
      description: "Created an academic support system for KTU University students. Implemented SGPA prediction using Random Forest, CGPA goal setting with constraint programming, and provided detailed analytics and study materials based on semester results. Developed a web API and integrated a Telegram bot for easy access.",
      techStack: "React.js, Express.js, Node.js, MongoDB, Random Forest, aiogram, botfather",
      repoLink: "https://github.com/AKomplished-bug/KTU_Studymaterial_Telegrambot",
      repoLinkText: "View on GitHub"
    },
    {
      title: "University Grade Prediction",
      date: "January 2023 – March 2023",
      description: "Developed a machine learning model to predict university grades based on historical data. The project involved data preprocessing, feature selection, and model training using algorithms such as Random Forest and Gradient Boosting. Implemented a user-friendly web interface to input student data and retrieve predicted grades.",
      techStack: "Python, Scikit-learn, Pandas, Flask, HTML, CSS",
      repoLink: "https://github.com/AKomplished-bug/University-Grade-Prediction",
      repoLinkText: "View on GitHub"
    },
    {
      title: "EduLex AI",
      date: "July 2024 – Ongoing",
      description: "EduLex AI is an innovative educational platform designed to support dyslexic students aged 8-18. It offers an AR/AI assistant teacher that provides personalized support and feedback, interactive games, and activities focused on phonemic awareness, decoding, reading comprehension, and vocabulary building. The platform also includes a community space for dyslexic users, interview preparation tools for dyslexic adults, and multilingual support, including Malayalam. Parents can track their children's learning progress in real-time.",
      techStack: "Can't disclose",
      repoLink: "https://edulex.pages.dev/",
      repoLinkText: "View on web"
    },
    {
      title: "Medical Chatbot",
      date: "April 2024 – April 2024",
      description: "The Medical Chatbot is an AI-powered application designed to assist users with medical queries through both text and voice interactions. It leverages advanced language models and vector databases to provide accurate and contextually relevant information from a wide range of medical documents. The chatbot supports users by enabling quick medical consultations and efficient information retrieval, making it an invaluable tool for healthcare providers, patients, and the general public.",
      techStack: "Python, Streamlit, Langchain, Pinecone, Hugging Face Transformers, Google Generative AI, SpeechRecognition, gTTS",
      repoLink: "https://github.com/AKomplished-bug/Medical-chatbot-",
      repoLinkText: "View on GitHub"
    },
    {
      title: "NQueens Solver Contribution",
      date: "February 2023",
      description: "Implemented an example program in JavaSMT that solves the NQueens problem of any given size using Boolean formulas and SMT solvers. The program places queens on an N x N chessboard such that no two queens threaten each other, and it outputs a possible solution. The implementation demonstrates the use of SMT solvers in constraint satisfaction problems, ensuring the placement adheres to rules like one queen per row, column, and diagonal.",
      techStack: "Java, JavaSMT, Boolean Formula, SMT Solver, ImmutableList, ProverEnvironment",
      repoLink: "https://github.com/sosy-lab/java-smt/blob/master/src/org/sosy_lab/java_smt/example/NQueens.java",
      repoLinkText: "View on GitHub"
    },
    {
      title: "Diabetes Prediction Web App",
      date: "January 2024 – March 2024",
      description: "Developed a web application for predicting diabetes using a machine learning model based on user input. The app features a user-friendly interface built with Streamlit, allowing users to enter health metrics and receive predictions. Implemented data visualization to help users understand risk factors and health trends.",
      techStack: "Python, Streamlit, Scikit-learn, Pandas, NumPy",
      repoLink: "https://github.com/AKomplished-bug/Diabetes-predicition-SVM-",
      repoLinkText: "View on GitHub"
    }
  ];

  return (
    <div className="projects-container">
      <h2>My Projects</h2>
      {projectData.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

export default Projects;
