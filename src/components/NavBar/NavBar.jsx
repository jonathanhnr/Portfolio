import React, { useState } from 'react';
import { MobileNav, Navbar } from '../../Style/NavStyle.jsx';
import lua from '../../../public/Portfolio/dark.svg';

const NavBar = ({ theme, themeToggle }) => {
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };
  return (
    <>
      <MobileNav onClick={() => setNav(!nav)} className={`${nav ? 'open-nav ' : 'close-menu'}`}>
        <div className={theme === "dark" ? "dark" : "light"}>

          <ul onClick={openNav}>
            <li>
              <a href={"#home"}>Home</a>
            </li>
            <li>
              <a href={"#about"}>about</a>
            </li>
            <li>
              <a href="#projects">projects</a>
            </li>
            <li>
              <a href="#contact">contact</a>
            </li>
          </ul>
        </div>
      </MobileNav>

      <nav>
        <Navbar className={`${nav ? 'open-nav' : ''}`}>
          <h3>Jonathan.dev</h3>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">projects</a>
            </li>
            <li>
              <a href="#contact">contact</a>
            </li>
            <li>
              <div className={'theme'}>
                <div
                  className={'theme-container'}
                  onClick={() => themeToggle(theme)}
                  id="#projects"
                >
                  {theme === 'light' ? (
                    <img className={'img-theme'} src={lua} alt="lua" />
                  ) : (
                    <img src={lua} alt="lua" />
                  )}
                </div>
              </div>
            </li>
            <li onClick={openNav}>
              <i className="fa-solid fa-bars"></i>
            </li>
          </ul>
        </Navbar>
      </nav>
    </>
  );
};

export default NavBar;
