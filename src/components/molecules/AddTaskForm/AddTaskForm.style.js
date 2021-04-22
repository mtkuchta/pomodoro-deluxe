import styled from 'styled-components';

export const StyledForm = styled.form`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (orientation: landscape) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  @media (min-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const StyledTaskInput = styled.input`
  width: 90%;
  height: 20%;
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.colors.violet};
  background-color: transparent;
  font-size: 1.8em;
  padding-bottom: 5px;
  padding-left: 5px;
  margin-bottom: 15px;

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
    height: 18%;
    /* padding-bottom: 0; */
    font-size: 3em;
  }
`;

export const ButtonsWrapper = styled.div`
  width: 100%;
  @media (orientation: landscape) {
    width: 30%;
    display: flex;
    flex-direction: row;
  }
  @media (min-width: 700px) {
    width: 90%;
  }
`;

export const FormButton = styled.button`
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

  @media (min-width: 700px) {
    font-size: 2.2em;
    padding: 8px 25px;
  }

  @media (min-width: 1024px) {
    transition: 0.5s;
    position: relative;
    border: 4px solid transparent;
    font-size: 2.4em;
    padding: 6px 25px;
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.colors.violet};
      background-color: ${({ theme }) => theme.colors.white};
      border: 4px solid ${({ theme }) => theme.colors.violet};
    }
  }
`;
