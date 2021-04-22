import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  ${({ isSettingsActive }) => (isSettingsActive ? `top:0%;` : `top:92%;`)}
  background-color: ${({ theme }) => theme.colors.white};
  transition: 0.7s;
  transition-timing-function: ease-in-out;

  @media (orientation: landscape) {
    ${({ isSettingsActive }) => (isSettingsActive ? `top:0%;` : `top:88%;`)}
  }

  @media (min-width: 700px) and (orientation: landscape) {
    ${({ isSettingsActive }) => (isSettingsActive ? `top:0%;` : `top:92%;`)}
  }

  @media (min-width: 1024px) {
    height: 40%;
    width: 900px;
    top: 25%;
    left: ${({ isSettingsActive }) => (isSettingsActive ? '0px' : '-820px')};
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: flex-start;
    background-color: ${({ theme }) => theme.colors.violet};
    box-shadow: ${({ theme, isSettingsActive }) => (isSettingsActive ? `10px 0px 20px 20px  ${theme.colors.black}` : `none`)};
    border-radius: 0 20px 20px 0;
    z-index: 100;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 0 20px 20px 0;
      display: ${({ isSettingsActive }) => (isSettingsActive ? 'block' : 'none')};
      z-index: -1;
      transition: 0.5s;
    }
  }
`;

export const StyledText = styled.h1`
  width: 100%;
  height: 8%;
  background-color: blue;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.violet};
  text-align: center;
  font-size: 2.8em;
  padding-top: 10px;
  letter-spacing: 2px;
  cursor: pointer;

  @media (orientation: landscape) {
    height: 12%;
    padding-top: 5px;
  }

  @media (min-width: 700px) {
    font-size: 3.5em;
    letter-spacing: 3px;
    padding-top: 20px;
  }

  @media (min-width: 700px) and (orientation: landscape) {
    height: 8%;
    padding-top: 10px;
  }

  @media (min-width: 1024px) {
    height: 90%;
    width: 100px;
    writing-mode: vertical-rl;
    font-size: 4.5em;
    padding-right: 15px;
    letter-spacing: 4px;
    transition: 0.5s;
    border-left: 5px solid ${({ theme }) => theme.colors.white};
    border-radius: 0 20px 20px 0;

    &:hover {
      color: ${({ theme }) => theme.colors.red};
    }
  }
`;
