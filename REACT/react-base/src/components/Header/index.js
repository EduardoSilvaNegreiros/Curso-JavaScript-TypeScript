import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

import { Nav } from './styled';

export default function Header() {
  return (
    <Nav>
      <Link href="aa">
        <FaHome size={24} />
      </Link>

      <Link href="bb">
        <FaUserAlt size={24} />
      </Link>

      <Link href="cc">
        <FaSignInAlt size={24} />
      </Link>
    </Nav>
  );
}
