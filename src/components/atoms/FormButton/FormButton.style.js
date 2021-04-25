import styled from 'styled-components';

export const StyledButton = styled.button`
  font-size: 2em;
  padding: 10px 15px;
  letter-spacing: 1px;
  background-color: ${({ theme }) => theme.colors.red};
  border: none;
  border-radius: 8px;
  box-shadow: 0px 0px 10px ${({ theme }) => theme.colors.violet};
  color: ${({ theme }) => theme.colors.white};
  margin: 8px 0;
  border: 4px solid transparent;

  &:focus {
    outline: none;
  }

  @media (min-width: 700px) {
    width: 55%;
    font-size: 2.5em;
    padding: 15px 20px;
    margin: 20px 0;
  }

  @media (min-width: 700px) and (orientation: landscape) {
    width: 40%;
    font-size: 2em;
    padding: 10px 15px;
    margin: 10px 0;
  }

  @media (min-width: 1024px) {
    width: 40%;
    cursor: pointer;
    transition: 0.5s;
    padding: 8px 15px;

    &:hover {
      border: 4px solid ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.violet};
    }
  }
`;
