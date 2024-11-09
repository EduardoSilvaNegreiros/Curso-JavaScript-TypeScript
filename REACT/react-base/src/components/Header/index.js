import React from 'react';
import { FaHome, FaUserAlt } from 'react-icons/fa';

import { Nav } from './styled';

export default function Header() {
  return (
    <Nav>
      <a href="aa">
        <FaHome size={24} />
      </a>

      <a href="bb">
        <FaUserAlt size={24} />
      </a>
    </Nav>
  );
}
