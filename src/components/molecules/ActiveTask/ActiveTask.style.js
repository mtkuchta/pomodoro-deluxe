import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  @media (orientation: landscape) {
    height: 15%;
  }

  @media (min-width: 700px) {
    height: 12%;
  }
`;

export const StyledText = styled.h1`
  color: ${({ theme }) => theme.colors.red};
  font-size: 2.4em;
  font-weight: normal;
  transform: scale(1);
  transition: 0.5s;

  &::first-letter {
    text-transform: uppercase;
  }

  @media (min-width: 700px) {
    font-size: 3.6em;
  }

  @media (min-width: 1024px) {
    cursor: pointer;
    font-size: 4.5em;

    &:hover {
      transform: scale(1.1);
    }
  }
`;
