import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 70%;
  height: 15%;
  background-color: ${({ theme }) => theme.colors.violet};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 4.2em;
  letter-spacing: 2px;
  border-radius: 10px;

  &:focus {
    outline: none;
  }
`;
