import React, { useState } from 'react';

const Project = ({ logo, title, text,stacks,link ,scrollY,transition,live}) => {
  const [scroll, setScroll] = useState(false)
  return (
    <div className={'pro pro__1'}>
      <div className={'pro__img'}>
        <a href={link}>
          <img src={logo} alt=''
               style={{

                 transform: scroll ? `translateY(${scrollY})` : "translateY(0%)",
                 transition: `transform ${transition} ease-in-out`,
               }}
               onMouseEnter={() => setScroll(true)}
               onMouseLeave={() => setScroll(false)}/>
        </a>
      </div>
      <div className={'pro__text'}>
        <h3>{title}</h3>
        <p>{text}</p>
        <div className={'stack'}>
          {stacks.map((stack) => (
            <p key={stack}>{stack}</p>
          ))}
        </div>
        <div className={'links'}>
          <a href={link}>
            <i className={'fa-brands fa-github'}></i>
            code
          </a>
          {live &&(
            <a href={live}>
              <i className={"fa-solid fa-arrow-up-right-from-square link-icon"}></i>
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>);
};

export default Project;