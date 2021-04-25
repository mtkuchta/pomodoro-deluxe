import styled from 'styled-components';

export const StyledForm = styled.form`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @media (orientation: landscape) {
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
  }

  @media (min-width: 1024px) {
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }
`;

export const StyledTaskInput = styled.input`
  width: 90%;
  height: 30%;
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.colors.violet};
  background-color: transparent;
  font-size: 1.8em;
  padding-bottom: 5px;
  padding-left: 5px;

  &:focus {
    outline: none;
  }

  @media (orientation: landscape) {
    height: 50%;
    width: 70%;
  }

  @media (min-width: 700px) {
    width: 90%;
    height: 30%;
    font-size: 2.6em;
  }

  @media (min-width: 1024px) {
    height: 30%;
    font-size: 2.5em;
    padding-bottom: 5px;
  }
`;

export const ButtonsWrapper = styled.div`
  width: 100%;
  height: 30%;

  @media (orientation: landscape) {
    width: 25%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  @media (min-width: 700px) {
    width: 90%;
    height: 40%;
    flex-direction: row;
    justify-content: flex-start;
  }

  @media (min-width: 1024px) {
    height: 40%;
  }
`;

export const FormButton = styled.button`
  height: 90%;
  background-color: ${({ theme }) => theme.colors.violet};
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.7em;
  padding: 5px 14px;
  border: none;
  letter-spacing: 1px;
  margin: 0 5px;
  border-radius: 6px;

  &:focus {
    outline: none;
  }

  @media (orientation: landscape) {
    height: 35%;
  }

  @media (min-width: 700px) {
    font-size: 2.2em;
    padding: 8px 25px;
  }

  @media (min-width: 1024px) {
    height: 90%;
    transition: 0.5s;
    position: relative;
    border: 4px solid transparent;
    font-size: 2em;
    padding: 0px 20px;
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.colors.violet};
      background-color: ${({ theme }) => theme.colors.white};
      border: 4px solid ${({ theme }) => theme.colors.violet};
    }
  }
`;
