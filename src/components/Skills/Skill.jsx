import React from 'react';

const Skill = ({ imagem, alt }) => {
  return (
    <>
      <li>
        <img src={imagem} alt={alt} />
      </li>
    </>
  );
};

export default Skill;
