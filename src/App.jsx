import './App.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import About from './Section/About/About.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import Footer from './components/Footer/Footer.jsx';
import Projects from './Section/Projects/Projects.jsx';
import Home from './Section/Home/Home.jsx';
import Contact from './Section/Contact/Contact.jsx';
import Carrosel from './components/Carrosel/Carrosel.jsx';
import { productImages } from './assets';
import AspectImage from './components/AspectImage/AspectImage.jsx';
import { useEffect, useState } from 'react';
import { GlobalStyles } from './Style/GlobalStyles.jsx';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './theme.js';

function useTheme() {
  const getTheme = () => {
   return JSON.parse(localStorage.getItem("theme")) || "light"
  }
  const [theme , setTheme] = useState(() => getTheme())
  const themeToggle = theme => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };
  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  return [theme, themeToggle]
}

function App() {
  const [theme, themeToggle] = useTheme()

  return (
    <>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <NavBar themeToggle={themeToggle} theme={theme} />
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
