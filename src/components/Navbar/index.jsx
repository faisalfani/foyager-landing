import React from 'react';
import { NavBrand, NavLink, NavButton } from './styled';
import NavItem from './NavItem';
import { Link } from 'react-router-dom';
import { Box } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Box display='flex' justifyContent='space-between' px='9rem' py='1rem'>
      <Link to='/'>
        <NavBrand
          src='assets/img/navBrand-color.svg'
          alt='Picture of the author'
          width={130}
        />
      </Link>
      <NavLink>
        <NavItem path='/' name='Home' />
        <NavItem path='/about' name='About' />
        <NavItem path='/work' name='Work' />
        <NavButton
          as='a'
          href='mailto:faisal.isfahani@gmail.com'
          transition='all ease'
          transitionDuration='0.3s'
          _hover={{
            bgGradient: 'linear(to-r, blue.500, pink.500)',
            borderColor: 'white',
            color: 'white',
          }}
        >
          Hire Us
        </NavButton>
      </NavLink>
    </Box>
  );
};

export default Navbar;
