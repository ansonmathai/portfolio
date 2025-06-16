import "./Skills.css";

const skills = ["C", "Python", "Java", "Go", "Machine Learning"];

const Skills = () => {
    return (
        <div className="skills-container">
            <h1>My skills</h1>
            <div className="skills-list">
                {skills.map((skill, index) => (
                    <span key={index} className="skill-badge">{skill}</span>
                ))}
            </div>
        </div>
    );
};

export default Skills;