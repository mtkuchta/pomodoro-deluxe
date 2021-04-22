import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Wrapper = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 700px) {
    width: 10%;
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const StyledIcon = styled(FontAwesomeIcon)`
  height: 90%;
  width: 100%;
  color: ${({ theme }) => theme.colors.violet};
  font-size: 2.8em;

  @media (min-width: 700px) {
    font-size: 5em;
  }
`;
