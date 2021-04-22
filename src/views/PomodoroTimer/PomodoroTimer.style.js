import styled from 'styled-components';

export const Wrapper = styled.main`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (orientation: landscape) {
    flex-direction: row;
    flex-wrap: wrap;
  }

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
