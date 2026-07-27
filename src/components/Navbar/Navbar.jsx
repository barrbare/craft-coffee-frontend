import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { FiCoffee } from "react-icons/fi";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 4rem;
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: ${({ theme }) => theme.shadows.soft};

  @media (max-width: 768px) {
    padding: 1rem 2rem;
  }
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.accent};
  letter-spacing: 1px;

  svg {
    font-size: 1.8rem;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2.5rem;
`;

const StyledNavLink = styled(NavLink)`
  font-size: 1rem;
  font-weight: 500;
  color: #d7ccc8;
  transition: ${({ theme }) => theme.transitions.default};
  position: relative;

  &:hover, &.active {
    color: ${({ theme }) => theme.colors.accent};
  }

  &.active::after {
    content: "";
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.accent};
    border-radius: 2px;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <Logo to="/">
        <FiCoffee /> Craft Coffee
      </Logo>
      <NavLinks>
        <StyledNavLink to="/" end>
          Home
        </StyledNavLink>
        <StyledNavLink to="/menu">
          Menu
        </StyledNavLink>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;