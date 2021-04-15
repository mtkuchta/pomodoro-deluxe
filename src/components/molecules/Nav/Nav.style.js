import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavContainer = styled.div`
  width: 100%;
  /* position: absolute; */
  top: 10%;
  right: 0;
  display: flex;
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
`;
