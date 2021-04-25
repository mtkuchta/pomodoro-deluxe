import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Wrapper = styled.li`
  width: 90%;
  height: ${({ isOpen }) => (isOpen ? '40%' : '10%')};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: ${({ theme, isActive }) => (isActive ? theme.colors.violet : theme.colors.violetTransparent)};
  border-radius: 8px;
  margin: 3px 0;
  padding: 0 10px;
  color: ${({ theme }) => theme.colors.white};
  transition: height 0.5s;
  flex-shrink: 0;

  p {
    display: ${({ isOpen }) => (isOpen ? ' none' : 'block')};
    font-size: 1.8em;
    padding-left: 10px;

    &::first-letter {
      text-transform: uppercase;
    }
  }

  @media (orientation: landscape) {
    height: ${({ isOpen }) => (isOpen ? '75%' : '20%')};
  }

  @media (min-width: 700px) {
    height: ${({ isOpen }) => (isOpen ? '35%' : '8%')};
    margin: 5px 0;
    p {
      font-size: 2.5em;
    }
  }

  @media (min-width: 700px) and (orientation: landscape) {
    height: ${({ isOpen }) => (isOpen ? '40%' : '10%')};
  }

  @media (min-width: 1024px) {
    height: ${({ isOpen }) => (isOpen ? '35%' : '8%')};
    min-height: 60px;
    padding-left: 2%;
    width: 90%;
    cursor: pointer;
    transition: 0.5s;

    p {
      font-size: 2.5em;
      padding-left: 2%;
      transition: 0.5s;
    }

    &:hover p {
      letter-spacing: 1px;
    }
  }
`;

export const StyledIcon = styled(FontAwesomeIcon)`
  color: ${({ theme, isActive }) => (isActive ? theme.colors.white : theme.colors.violet)};
  font-size: 2.5em;

  @media (min-width: 700px) {
    font-size: 3.5em;
  }

  @media (min-width: 1024px) {
    font-size: 3em;

    &:hover {
      color: ${({ theme }) => theme.colors.green};
    }
  }
`;
