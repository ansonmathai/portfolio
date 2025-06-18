import "./Contact.css";

const Contact = () => {
    return (
        <div className="contact-container">
            <h1>Contact me</h1>
            <p>Have a project in mind or just want to connect? Reach out to me below!</p>
            {/* <form className="contact-form">
                <input placeholder="Name" type="text" required />
                <input placeholder="Email" type="email" required />
                <textarea placeholder="Message" rows="4" required />
                <button type="submit">Send</button>
            </form> */}
            <ul type="none">
                <li>
                    <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=1.portfolio.ansonmathai@gmail.com" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.icons8.com/?size=64&id=ptAjLogGbrSi&format=png" alt="Email" height="50px" />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/ansonmathai" target="_blank" rel="noopener noreferrer">
                        <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Github" height="50px" />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/anson-mathai-4111032b9" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.icons8.com/?size=50&id=8808&format=png" alt="LinkedIn" height="50px" />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Contact;