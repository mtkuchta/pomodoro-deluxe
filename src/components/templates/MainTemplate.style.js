import styled from 'styled-components';

export const AppContainer = styled.div`
  height: ${({ appHeight }) => `${appHeight}px`};
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledHeader = styled.header`
  display: flex;
  align-items: space-around;
  width: 92%;
  max-width: 1600px;
  height: 10%;
  margin: 0 auto;

  @media (min-width: 700px) {
    height: 15%;
  }

  @media (min-width: 700px) and (orientation: landscape) {
    height: 12%;
  }

  @media (min-width: 1024px) {
    height: 8%;
    justify-content: center;
  }
`;
