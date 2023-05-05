import React, { useEffect } from 'react';
import { SectionAbout } from '../../Style/AboutStyle.jsx';
import aboutImg from '../../../public/about-img.62b47e7f183d4b4e9feb.webp';
import Working from '../../../public/working-emoji.c5325f52b5be329995a5.png';
import Text from '../../../public/text2.3d5aa6ba2d0632bb4e0572631c3f9dc2.svg';
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration:2000
    })
  },[])

  return (
    <SectionAbout id='about'>
      <div className={'container'}>
        <div data-aos="zoom-in" className={'about-container'}>
          <div className={'img-side'}>
            <img className={'work-emoji'} src={Working} alt='Working' />
            <img className={'main-img'} src={aboutImg} alt='About' />
            <span>
              <img src={Text} alt='Text' />
            </span>
          </div>
          <div data-aos="zoom-in" className={'text-side'}>
            <h4>Sobre mim</h4>
            <h3>Um desenvolvedor front-end dedicado
              com sede em tecnologia
            </h3>
            <p>Como desenvolvedor front-end, possuo um impressionante arsenal de habilidades em HTML,
              CSS, JavaScript, React, Tailwind. Sou excelente em projetar e manter sites
              responsivos que oferecem uma experiência de usuário tranquila. Minha experiência reside na
              criação de interfaces dinâmicas e envolventes por meio da escrita de código limpo e
              otimizado e da utilização de ferramentas e técnicas de desenvolvimento de ponta.</p>
          </div>
        </div>
      </div>
    </SectionAbout>);
};

export default About;