import React from 'react';
import { SectionFooter } from '../../Style/FooterStyle.jsx';

const Footer = () => {
    return (
        <SectionFooter>
            <div className={"container"}>
              <div className={"footerc"}>
                <h3>Copyright © 2023. Todos os direitos são reservados</h3>
                <div className={"footerc-socials"}>
                  <a href='https://github.com/jonathanhnr'>
                    <i className={"fa-brands fa-github"}></i>
                  </a>
                  <a href='https://www.linkedin.com/in/jonathan-henrique-800051249/'>
                    <i className={"fa-brands fa-linkedin"}></i>
                  </a>
                </div>
              </div>
            </div>
        </SectionFooter>
    );
};

export default Footer;