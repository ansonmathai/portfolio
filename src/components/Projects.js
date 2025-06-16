import "./Projects.css";

const projectsData = [
    {
        title: "Portfolio Website",
        description: "A sleek React-based personal portfolio showcasing my work.",
        link: "https://github.com/ansonmathai/portfolio",
    },
    {
        title: "Supermarket Management System",
        description: "RDBMS project to manage billing of a supermarket, based on PERN Stack.",
        link: "https://github.com/ansonmathai",
    },
    {
        title: "IntelliEnergiTech",
        description: "Energy management embedded smart system.",
        link: "https://github.com/ansonmathai",
    },
];

const Projects = () => {
    return (
        <div className="projects-container">
            <h1>My projects</h1>
            <div className="projects-list">
                {projectsData.map((project, index) =>(
                    <div key={index} className="project-card">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">Explore</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;