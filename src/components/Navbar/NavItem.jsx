import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { CustomAnchor } from './styled';

const NavItem = ({ path, name }) => {
  const { pathname } = useLocation();
  return (
    <Link to={path}>
      <CustomAnchor isActive={pathname == path}>{name}</CustomAnchor>
    </Link>
  );
};

export default NavItem;
