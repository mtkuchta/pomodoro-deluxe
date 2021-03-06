import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  justify-content: center;
  padding: 15px 0;
  justify-content: space-between;

  p {
    font-size: 2.5em;
  }

  @media (min-width: 700px) {
    width: 70%;
  }

  @media (min-width: 700px) and (orientation: landscape) {
    width: 50%;
  }

  @media (min-width: 1024px) {
    width: 70%;
  }
`;

export const StyledLabel = styled.label`
  font-size: 2.4em;
  color: ${({ theme }) => theme.colors.white};

  @media (min-width: 700px) {
    font-size: 2.5em;
  }

  @media (min-width: 700px) and (orientation: landscape) {
    font-size: 2.2em;
  }
`;

export const StyledInput = styled.input`
  border: none;
  background-color: transparent;
  font-size: 2.5em;
  width: 20%;
  padding-left: 15px;
  color: ${({ theme }) => theme.colors.white};

  &:focus {
    outline-color: ${({ theme }) => theme.colors.red};
  }

  @media (min-width: 700px) {
    font-size: 2.6em;
  }
  @media (min-width: 700px) and (orientation: landscape) {
    font-size: 2.5em;
  }
`;
