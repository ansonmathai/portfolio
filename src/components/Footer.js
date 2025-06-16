import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Anson Mathai. All Rights Reserved.</p>
            <div className="footer-links">
                <a href="https://www.linkedin.com/in/anson-mathai-4111032b9" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com/ansonmathai" target="_blank" rel="noopener noreferrer">Github</a>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=1.portfolio.ansonmathai@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
            </div>
        </footer>
    );
};

export default Footer;