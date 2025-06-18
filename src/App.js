import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import About from "./components/About";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path='/portfolio' element={<Home />} />
            <Route path='/portfolio/about' element={<About />} />
            <Route path='/portfolio/projects' element={<Projects />} />
            <Route path='/portfolio/skills' element={<Skills />} />
            <Route path='/portfolio/contact' element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
};

export default App;
