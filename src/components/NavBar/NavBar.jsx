import React, { useState } from 'react';
import { MobileNav, Navbar } from '../../Style/NavStyle.jsx';
import lua from '../../../public/Portfolio/dark.svg';
import NavItem from './NavItem.jsx';

const NavBar = ({ theme, themeToggle }) => {
  const [nav, setNav] = useState(false);

  const themeImg = theme === 'light' ? 'img-theme' : '';

  const navNames = ['Home', 'Sobre', 'Projetos', 'Contato'];
  const toggleNav = () => setNav(prevNav => !prevNav);
  const toggleTheme = () => themeToggle(theme);

  return (
    <>
      <MobileNav
        onClick={toggleNav}
        className={`${nav ? 'open-nav ' : 'close-menu'}`}
      >
        <div className={theme === 'dark' ? 'dark' : 'light'}>
          <ul onClick={toggleNav}>
            {navNames.map(name => (
              <NavItem key={name} name={name} />
            ))}
          </ul>
        </div>
      </MobileNav>

      <nav>
        <Navbar className={`${nav ? 'open-nav' : ''}`}>
          <h3>Jonathan.dev</h3>
          <ul>
            {navNames.map(name => (
              <NavItem key={name} name={name} />
            ))}
            <li>
              <div className={'theme'}>
                <button
                  className={'theme-container'}
                  onClick={toggleTheme}
                  id="#projects"
                >
                  {<img className={themeImg} src={lua} alt="lua/sol" />}
                </button>
              </div>
            </li>
            <li onClick={toggleNav}>
              <i className="fa-solid fa-bars"></i>
            </li>
          </ul>
        </Navbar>
      </nav>
    </>
  );
};

export default NavBar;
