import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavContainer = styled.div`
  width: 50%;
  position: absolute;
  top: 9%;
  right: 0;
  display: flex;
  flex-direction: column;
  transition: 0.6s;
`;

export const StyledLink = styled(NavLink)`
  text-align: center;
  background-color: ${({ theme }) => theme.colors.violet};
  color: ${({ theme }) => theme.colors.white};
  font-size: 2.5em;
  letter-spacing: 1px;
  text-decoration: none;
  padding: 8px 0;
`;
