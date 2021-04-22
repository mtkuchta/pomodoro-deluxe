import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavContainer = styled.nav`
  width: 100%;
  max-width: 1200px;
  display: ${({ isNavVisible }) => (isNavVisible ? 'flex' : 'none')};
  flex-direction: column;
  transition: 0.6s;
  animation: showNav 0.2s linear;
  border-bottom: 2px solid ${({ theme }) => theme.colors.violet};
  transition: 0.5s;

  @keyframes showNav {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 90%;
    border: none;
  }
`;

export const StyledLink = styled(NavLink)`
  text-align: center;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.violet};
  font-size: 2.5em;
  letter-spacing: 1px;
  text-decoration: none;
  padding: 8px 0;
  font-weight: bold;

 

  @media (min-width: 700px) {
    font-size: 3.5em;
  }

  @media (min-width: 1024px) {
    margin: 0 20px;
    cursor: pointer;
    transform: scale(1);
    transition: 0.5s;
    padding: 4px 0;
    overflow: hidden;

    &.active::first-letter{
    color:${({ theme }) => theme.colors.red};
  }

    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      border-bottom: 4px solid ${({ theme }) => theme.colors.red};
      transform: translateY(20px);
      transition: 0.2s ease-in;
     
    }

    &:hover {
      color: ${({ theme }) => theme.colors.red};
    }

    &:hover::before {
      transform: translateY(-4px);
    }
  }

  }
`;
