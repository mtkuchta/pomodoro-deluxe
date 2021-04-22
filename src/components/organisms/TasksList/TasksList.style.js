import styled from 'styled-components';

export const Wrapper = styled.ul`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;

  @media (orientation: landscape) {
    width: 80%;
    height: 65%;
  }

  @media (min-width: 700px) {
    width: 80%;
    height: 75%;
  }

  @media (min-width: 1024px) {
    width: 80%;
    height: 85%;
  }
`;
