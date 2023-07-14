import React from 'react';

const NavItem = ({ name }) => {
  return (
    <li>
      <a href={`#${name.toLowerCase()}`}>{name}</a>
    </li>
  );
};

export default NavItem;
