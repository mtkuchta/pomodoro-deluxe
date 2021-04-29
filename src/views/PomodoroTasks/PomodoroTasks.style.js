import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.main`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1024px) {
    padding-top: 20px;
  }
`;

export const TimerLink = styled(Link)`
  font-size: 2.2em;
  height: 15%;
  color: ${({ theme }) => theme.colors.red};
  letter-spacing: 1px;
  text-decoration: none;

  @media (min-width: 700px) {
    font-size: 3.5em;
    padding-top: 10px;
  }
`;
