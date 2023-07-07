import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

const Drop = () => {
  return (
      <DropdownMenu.Root>
        <DropdownMenu.Trigger />

        <DropdownMenu.Portal>
          <DropdownMenu.Content className="DropdownMenuContent">
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#contact">contact</a>
              </li>
              <li>
                <a href="#projects">projects</a>
              </li>
            </ul>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
  );
};

export default Drop;