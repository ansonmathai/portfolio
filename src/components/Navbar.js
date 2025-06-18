import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h2 className="logo">Anson's Portfolio</h2>
            <ul className="nav-links">
                <li><Link to="/portfolio">Home</Link></li>
                <li><Link to="/portfolio/about">About</Link></li>
                <li><Link to="/portfolio/skills">Skills</Link></li>
                <li><Link to="/portfolio/projects">Projects</Link></li>
                <li><Link to="/portfolio/contact">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;