import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.main`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TimerLink = styled(Link)`
  font-size: 2.2em;
  color: ${({ theme }) => theme.colors.red};
  letter-spacing: 1px;
  text-decoration: none;
`;
