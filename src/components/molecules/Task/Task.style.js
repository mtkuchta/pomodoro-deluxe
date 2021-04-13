import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Wrapper = styled.li`
  width: 90%;
  height: 10%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: ${({ theme, isActive }) => (isActive ? theme.colors.violet : theme.colors.violetTransparent)};
  border-radius: 8px;
  margin: 3px 0;
  padding: 0 10px;
  color: ${({ theme }) => theme.colors.white};

  p {
    font-size: 1.8em;
    padding-left: 10px;

    &::first-letter {
      text-transform: uppercase;
    }
  }
`;

export const StyledIcon = styled(FontAwesomeIcon)`
  color: ${({ theme, isActive }) => (isActive ? theme.colors.white : theme.colors.violet)};
  font-size: 2.5em;
`;
