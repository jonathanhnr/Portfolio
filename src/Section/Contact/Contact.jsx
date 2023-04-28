import React from 'react';
import { SectionContact } from '../../Style/ContactStyle.jsx';

const Contact = () => {
  return (
    <SectionContact id={'contact'}>
      <div className={'container'}>
        <div className={'contact-content'}>
          <div className={'contact-title'}>
            <p className={'contact'}>Contato</p>
            <h3>Entre em contato</h3>
          </div>
          <div className={'contact-icons'}>
            <div className={'contact-icons-box'}>
              <span> <i className={'fa-solid fa-map-location-dot'}></i></span>
              <div className={'contact-info'}>
                <h3>location</h3>
                <p className={'location'}>Siqueira Campos, PR</p>
              </div>
            </div>
            <div className={'contact-icons-box'}>
              <span> <i className={'fa-solid fa-envelope-open-text'}></i></span>
              <div className={'contact-info'}>
                <h3>Email</h3>
                <a href='mailto:henriquejonathan500@gmail.com'>henriquejonathan500@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContact>
  );
};

export default Contact;