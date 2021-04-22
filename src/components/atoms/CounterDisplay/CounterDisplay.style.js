import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (orientation: landscape) {
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
    height: 40%;
  }

  @media (min-width: 1024px) {
    height: 50%;
  }
`;

export const StyledTime = styled.div`
  font-size: 8.6em;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.colors.violet};

  span {
    ${({ isRunning }) => (isRunning ? `animation: colon 1s ease-in-out infinite` : null)};
  }

  @keyframes colon {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @media (orientation: landscape) {
    padding: 20px 0;
  }

  @media (min-width: 700px) {
    font-size: 14em;
  }

  @media (min-width: 1024px) {
    font-size: 20em;
  }
`;
