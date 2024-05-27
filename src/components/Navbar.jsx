import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import  kd_logo  from '../assets/kd_logo.png';

// Styled components
const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: #fff; // Adjust background color if necessary
`;

const Logo = styled.img`
  width: 72px; // 18 * 4
  height: 72px; // 18 * 4
  object-fit: contain;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1.75rem; // 7 * 0.25rem (base unit)
  font-size: 1.125rem; // text-lg
  font-weight: 500; // font-medium
`;

const StyledNavLink = styled(NavLink)`
  color: black;
  text-decoration: none;

  &.active {
    color: #1d4ed8; // text-blue-600
  }
`;

const Navbar = () => {
  return (
    <Header>
      <NavLink to='/'>
        <Logo src={kd_logo} alt='logo' />
      </NavLink>
      <Nav>
        <StyledNavLink to='/about' activeClassName='active'>
          About
        </StyledNavLink>
        <StyledNavLink to='/projects' activeClassName='active'>
          Projects
        </StyledNavLink>
      </Nav>
    </Header>
  );
};

export default Navbar;
