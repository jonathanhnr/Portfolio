import './App.css';
import About from './Section/About/About.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import Footer from './components/Footer/Footer.jsx';
import Projects from './Section/Projects/Projects.jsx';
import Home from './Section/Home/Home.jsx';
import Contact from './Section/Contact/Contact.jsx';

function App() {

  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
