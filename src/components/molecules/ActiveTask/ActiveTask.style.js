import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledText = styled.h1`
  color: ${({ theme }) => theme.colors.red};
  font-size: 2.4em;
  font-weight: normal;

  &::first-letter {
    text-transform: uppercase;
  }
`;
