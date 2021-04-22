import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 70%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  @media (orientation: landscape) {
    width: 60%;
    height: 100%;
    align-items: center;
    justify-content: flex-start;
  }

  @media (min-width: 700px) {
    height: 60%;
  }
  @media (min-width: 700px) and (orientation: landscape) {
    width: 60%;
    height: 100%;
  }

  @media (min-width: 1024px) {
    height: 60%;
    width: 100%;
  }
`;
