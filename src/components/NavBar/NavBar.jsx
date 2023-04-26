import React, {useState} from 'react';
import {MobileNav, Navbar} from "../../Style/NavStyle.jsx";

const NavBar = () => {
    const [nav, setNav] = useState(false);

    const openNav = () => {
        setNav(!nav);
    };
    return (<>
            <MobileNav className={`${nav ? "open-nav" : "close-menu"}`}>
            <span onClick={openNav}>
                <i className="fa-solid fa-xmark"></i>
            </span>
                <ul onClick={openNav} >
                    <li>
                        <a href="#home">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#about">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#contact">
                            contact
                        </a>
                    </li>
                    <li>
                        <a href="#projects">
                            projects
                        </a>
                    </li>
                </ul>
            </MobileNav>

            <nav>
                <Navbar className={`${nav ? "open-nav" : ""}`}>
                    <h3>Jonathan.dev</h3>
                    <ul>
                        <li>
                            <a href="#home">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#about">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#projects">
                                projects
                            </a>
                        </li>
                        <li>
                            <a href="#contact">
                                contact
                            </a>
                        </li>
                        <li onClick={openNav}>
                            <i className="fa-solid fa-bars"></i>
                        </li>
                    </ul>

                </Navbar>
            </nav>
        </>);
};

export default NavBar;