import React from 'react';
import {SectionHome} from "../../Style/HomeStyle.jsx";
import Skill from "../../components/Skills/Skill.jsx";
import Html from "../../../public/html.6e7b1b463015c056aeb9a624c8dc2876.svg"
import CSS from "../../../public/css3.9cecabbf6ce67609c48bc4f280a11002.svg"
import JavaScript from "../../../public/javascript.de4c2594613e34b15666206bbede7327.svg"
import react from "../../../public/react.afac9c43724070bf6674f2692b7356a9.svg"
import TailWind from "../../../public/tailwind.79614a5f61617ba49a0891494521226b.svg"

const Home = () => {
    return (
        <SectionHome data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" id={"home"}>
            <div className={"container"}>
                <div className={"content"}>
                    <div className={"hero-main"}>
                        <div className={"hero-text"}>
                            <h1>Front-End React Developer</h1>
                            <p>Olá, sou Jonathan henrique. Um desenvolvedor Front-end React, apaixonado em
                                tecnologia </p>
                            <span>
                              <a href="https://www.linkedin.com/in/jonathan-henrique-800051249/">
                                  <i className={"fa-brands fa-linkedin"}></i>
                              </a>
                              <a href="https://github.com/jonathanhnr">
                                  <i className={"fa-brands fa-github"}></i>
                              </a>
                          </span>
                        </div>
                        <div className={"hero-img"}></div>
                    </div>
                    <div className={"skills"}>
                        <p>lista de Tecnologias</p>
                        <div className={"logos"}>
                            <ul>
                              <Skill imagem={Html} alt={"html"}/>
                              <Skill imagem={JavaScript} alt={"JavaScript"}/>
                              <Skill imagem={CSS} alt={"CSS"}/>
                              <Skill imagem={react} alt={"react"}/>
                              <Skill imagem={TailWind} alt={"TailWind"}/>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </SectionHome>);
};

export default Home;