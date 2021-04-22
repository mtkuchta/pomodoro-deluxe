import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 90%;
  height: ${({ isOpen }) => (isOpen ? '20%' : '100%')};
  margin: 0 5%;
  background-color: transparent;
  border-radius: 8px;
  border: 2px dashed ${({ theme }) => theme.colors.violetTransparent};
  color: ${({ theme }) => theme.colors.violet};
  font-size: 2.2em;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  @media (min-width: 700px) {
    font-size: 3.4em;
  }

  @media (min-width: 1024px) {
    width: 90%;
    margin: 0;
    height: ${({ isOpen }) => (isOpen ? '0%' : '100%')};
    transition:  .5s;

    &:hover {
      
      letter-spacing:1px;
  }
`;
