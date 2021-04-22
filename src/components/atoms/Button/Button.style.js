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
  /* box-shadow: 0 8px 6px -5px black; */
  transition: 0.5s ease-out;

  &:focus {
    outline: none;
  }

  &:disabled {
    box-shadow: none;
    color: gray;
  }

  @media (min-width: 700px) {
    width: 40%;
    height: 12%;
    font-size: 5em;
  }

  @media (min-width: 700px) and (orientation: landscape) {
    width: 50%;
    height: 10%;
  }

  @media (min-width: 1024px) {
    width: 30%;
    height: 10%;
    cursor: pointer;
    transition: 0.5s ease-out;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 5px solid ${({ theme }) => theme.colors.violet};
      border-radius: 10px;
      display: none;
      transition: 0.4s ease;
    }

    &:hover {
      background-color: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.violet};
      /* border: 5px solid ${({ theme }) => theme.colors.violet}; */
      box-shadow: none;
    }

    &:hover::before {
      display: block;
    }
  }
`;
