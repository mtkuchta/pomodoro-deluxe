import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: ${({ isOpen }) => (isOpen ? '30%' : '8%')};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px 0;

  @media (orientation: landscape) {
    width: 80%;
    height: ${({ isOpen }) => (isOpen ? '30%' : '10%')};
  }

  @media (min-width: 700px) {
    height: ${({ isOpen }) => (isOpen ? '20%' : '8%')};
  }

  @media (min-width: 700px) {
    width: 80%;
  }
  @media (min-width: 1024px) {
    width: 80%;
    height: ${({ isOpen }) => (isOpen ? '20%' : '6%')};
  }
`;
