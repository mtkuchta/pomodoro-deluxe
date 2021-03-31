import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  transition: 0.7s;
  transition-timing-function: ease-in-out;
  ${({ isSettingsActive }) => (isSettingsActive ? `top:0%;` : `top:92%;`)}
  overflow: hidden;
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
  box-shadow: inset 0 10px 10px -10px ${({ theme }) => theme.colors.green};
`;
