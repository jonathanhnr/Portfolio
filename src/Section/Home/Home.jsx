import { SectionHome } from '../../Style/HomeStyle.jsx';
import { SKILLS } from './SKILLS.jsx';
import { LINKS } from './LINKS.jsx';
import Skill from '../../components/Skills/Skill.jsx';

const Home = () => {
  return (
    <SectionHome
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
      id={'home'}
    >
      <div className={'container'}>
        <div className={'content'}>
          <div className={'hero-main'}>
            <div className={'hero-text'}>
              <h1>Front-End React Developer</h1>
              <p>
                Olá, sou Jonathan henrique. Um desenvolvedor Front-end React,
                apaixonado em tecnologia{' '}
              </p>
              <span>
                {LINKS.map(({ url, className }, index) => {
                  return (
                    <a key={index} href={url}>
                      <i className={className}></i>
                    </a>
                  );
                })}
              </span>
            </div>
            <div className={'hero-img'}></div>
          </div>
          <div className={'skills'}>
            <p>lista de Tecnologias</p>
            <div className={'logos'}>
              <ul>
                {SKILLS.map(({ imagem, alt }, index) => (
                  <Skill key={index} imagem={imagem} alt={alt} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </SectionHome>
  );
};

export default Home;
