import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Wrapper = styled.li`
  position: relative;
  width: 100%;
  height: ${({ isOpen }) => (isOpen ? '65%' : '10%')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, isActive }) => (isActive ? theme.colors.violet : theme.colors.violetTransparent)};
  border-radius: 8px;
  margin: 3px 0;
  padding: 0 10px;
  color: ${({ theme }) => theme.colors.white};
  transition: height 0.5s;
  flex-shrink: 0;

  p {
    display: ${({ isOpen }) => (isOpen ? ' none' : 'flex')};
    align-items: center;
    height: 100%;
    width: 90%;
    font-size: 1.8em;
    text-align: left;
    padding-left: 10%;

    &::first-letter {
      text-transform: uppercase;
    }
  }

  @media (orientation: landscape) {
    height: ${({ isOpen }) => (isOpen ? '90%' : '20%')};
  }

  @media (min-width: 700px) {
    height: ${({ isOpen }) => (isOpen ? '50%' : '10%')};
    margin: 5px 0;
    p {
      font-size: 2.5em;
    }
  }

  @media (min-width: 700px) and (orientation: landscape) {
    height: ${({ isOpen }) => (isOpen ? '60%' : '10%')};
  }

  @media (min-width: 1024px) {
    height: ${({ isOpen }) => (isOpen ? '65%' : '8%')};
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

const FilteredIcon = ({ isActive, ...rest }) => <FontAwesomeIcon {...rest} />;

export const StyledIcon = styled(FilteredIcon)`
  position: absolute;
  top: 50%;
  left: 2%;
  transform: translateY(-50%);
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
