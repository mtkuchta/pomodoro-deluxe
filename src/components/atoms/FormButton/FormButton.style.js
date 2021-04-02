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

  &:focus {
    outline: none;
  }
`;
