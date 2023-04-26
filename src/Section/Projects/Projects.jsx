import React from 'react';
import { SectionProjects } from '../../Style/ProjectsStyle.jsx';
import Project from './Project.jsx';
import rentalboat from '../../../public/screenshot.png';
import shareme from '../../../public/shareme.png';
import reactGran from '../../../public/reactGram.png';


const Projects = () => {
  return (
    <SectionProjects id={'projects'}>
    <div className={'container'}>
      <div className={'project-content'}>
        <p>Projetos</p>
        <h3>Cada projeto é uma peça única de desenvolvimento</h3>
        <div className={'projects-grid'}>
          <Project link={'https://github.com/jonathanhnr/Rental-boat'} logo={rentalboat} title={'Rental-Boat'}
                   text={`Um site de aluguel de barcos, uma plataforma online que permite
                   usuários alugar barcos para uso pessoal ou comercial.
                   O site fornece uma interface para pesquisar, comparar e reservar barcos.`}
                   stacks={['React', ' css', 'JavaScript']} transition={'15s'} scrollY={'-86%'} />
          <Project link={'https://github.com/jonathanhnr/shareme'} logo={shareme} title={'Shareme'}
                   text={`Um site para você compartilhar com outros usuários seus dispositivos. Conta com um layout responsivo
                   e funcional, com barra de pesquisa e side bar
                   `}
                   stacks={['React', ' css', 'JavaScript',"postgres"]} scrollY={'-56%'} transition={'5s'} />
          <Project link={'https://github.com/jonathanhnr/ReactGram'} logo={reactGran} title={'ReactGram'}
                   text={`ReactGram é uma plataforma dinâmica e envolvente que permite que os usuários 
                   compartilhem e descubram fotos interessantes, conectem-se com outros usuários e
                    personalizem suas experiências no site. Com sua interface responsiva e recursos
                     intuitivos
                   `}
                   stacks={['React','css','JavaScript',"mongoDB","express"]} scrollY={'-77%'} transition={'5s'} />

        </div>
      </div>
    </div>
  </SectionProjects>);
};

export default Projects;