import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import  kd_logo  from '../assets/kd_logo.png';

// Styled components
const Header = styled.header`
   display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem; /* px-8 and py-4 */
  max-width: 80rem; /* max-w-5xl */
  margin: 0 auto; /* mx-auto */
  position: absolute;
  top: 0;
  background-color: transparent;
  z-index: 10;
  right: 0;
  left: 0;

  @media (min-width: 640px) {
    padding-left: 4rem; /* sm:px-16 */
    padding-right: 4rem; /* sm:px-16 */
  }
  
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
