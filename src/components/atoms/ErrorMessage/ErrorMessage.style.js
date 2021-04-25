import styled from 'styled-components';

export const StyledText = styled.p`
  color: ${({ theme }) => theme.colors.red};
  font-size: 1.6em;
  font-weight: bold;
  width: 100%;
  padding-left: 40px;

  @media (min-width: 700px) {
    font-size: 2em;
    width: 80%;
  }

  @media (min-width: 1024px) {
    font-size: 2.4em;
  }
`;
