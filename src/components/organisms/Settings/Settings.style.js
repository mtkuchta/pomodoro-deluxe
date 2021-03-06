import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: ${({ isSettingsActive }) => (isSettingsActive ? '0%' : '93%')};
  background-color: ${({ theme }) => theme.colors.violet};
  will-change: transform;
  transition: 0.5s;
  transition-timing-function: linear;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (orientation: landscape) {
    ${({ isSettingsActive }) => (isSettingsActive ? `top:0%;` : `top:88%;`)}
  }

  @media (min-width: 700px) {
    ${({ isSettingsActive }) => (isSettingsActive ? `top:0%;` : `top:93%;`)}
  }

  @media (min-width: 700px) and (orientation: landscape) {
    ${({ isSettingsActive }) => (isSettingsActive ? `top:0%;` : `top:88%;`)}
  }

  @media (min-width: 1024px) {
    height: 40%;
    width: 900px;
    top: 25%;
    left: ${({ isSettingsActive }) => (isSettingsActive ? '-100px' : '-820px')};
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: flex-start;
    box-shadow: ${({ theme, isSettingsActive }) => (isSettingsActive ? `10px 0px 20px 20px  ${theme.colors.black}` : `none`)};
    border-radius: 0 20px 20px 0;
    z-index: 100;
  }
`;

export const StyledText = styled.h1`
  width: 90%;
  height: 8%;
  background-color: blue;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.violet};
  border-bottom: 5px solid ${({ theme }) => theme.colors.white};
  text-align: center;
  font-size: 2.8em;
  padding-top: 10px;
  letter-spacing: 2px;
  cursor: pointer;

  @media (orientation: landscape) {
    height: 20%;
    padding-top: 5px;
  }

  @media (min-width: 700px) {
    height: 8%;
    font-size: 3.5em;
    letter-spacing: 3px;
    padding-top: 20px;
  }

  @media (min-width: 700px) and (orientation: landscape) {
    height: 14%;
    padding-bottom: 5px;
    padding-top: 5px;
  }

  @media (min-width: 1024px) {
    height: 90%;
    width: 100px;
    writing-mode: vertical-rl;
    font-size: 4em;
    padding-right: 15px;
    letter-spacing: 4px;
    transition: 0.5s;
    border-left: 5px solid ${({ theme }) => theme.colors.white};
    border-bottom: none;
    border-radius: 0 20px 20px 0;

    &:hover {
      color: ${({ theme }) => theme.colors.red};
    }
  }
`;
