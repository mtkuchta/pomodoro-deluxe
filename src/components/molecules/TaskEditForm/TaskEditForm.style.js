import styled from 'styled-components';

export const StyledForm = styled.form`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 90%;
  padding-left: 10px;
  animation: showForm 1s ease-in-out;

  div {
    width: 100%;
    height: 50%;
    margin-bottom: 5px;
  }
  @media (orientation: landscape) {
    div {
      width: 100%;
      height: 35%;
      margin-bottom: 5px;
    }
  }

  @media (min-width: 1024px) {
    padding-left: 40px;

    div {
      height: 30%;
      margin-bottom: 5px;
    }
  }

  @keyframes showForm {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const StyledLabel = styled.label`
  width: 40%;
  font-size: 1.3em;
  align-self: flex-start;
  border-bottom: 1px solid ${({ theme }) => theme.colors.green};
  margin-bottom: 2%;
  padding-left: 10px;
  letter-spacing: 1px;

  @media (min-width: 700px) {
    font-size: 1.8em;
  }

  @media (orientation: landscape) {
    margin-bottom: 3px;
  }
  @media (min-width: 700px) and (orientation: landscape) {
    margin-bottom: 1%;
  }

  @media (min-width: 1024px) {
    font-size: 1.8em;
    padding-bottom: 5px;
    width: 20%;
  }
`;

export const StyledInput = styled.input`
  width: 90%;
  font-size: 2em;
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 4%;

  &:focus {
    outline: none;
    color: ${({ theme }) => theme.colors.green};
  }

  @media (min-width: 700px) {
    font-size: 2.5em;
    margin-bottom: 2%;
  }

  @media (orientation: landscape) {
    font-size: 1.8em;
  }

  @media (min-width: 1024px) {
    font-size: 2.5em;
    margin-bottom: 2%;
  }
`;

export const StyledTextArea = styled.textarea`
  width: 90%;
  height: 100%;
  font-size: 1.6em;
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  overflow: scroll;
  overflow: hidden;

  &:focus {
    outline: none;
    color: ${({ theme }) => theme.colors.green};
  }

  @media (min-width: 700px) {
    font-size: 2.2em;
  }

  @media (min-width: 700px) and (orientation: landscape) {
    margin-bottom: 5px;
  }

  @media (min-width: 1024px) {
    width: inherit;
    height: 100%;
    font-size: 2.2em;
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  @media (min-width: 700px) {
    padding-bottom: 10px;
  }

  @media (min-width: 1024px) {
    padding-bottom: 0;
  }
`;

export const StyledButton = styled.button`
  font-size: 1.5em;
  padding: 2px 10px;
  margin: 0 3px;
  background-color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.violet};

  &:focus {
    outline: none;
  }
  @media (min-width: 700px) {
    font-size: 2.2em;
    padding: 4px 15px;
    margin: 0 6px;
  }

  @media (min-width: 700px) and (orientation: landscape) {
    font-size: 2em;
    padding: 3px 15px;
  }

  @media (min-width: 1024px) {
    cursor: pointer;
    font-size: 2.2em;
    transition: 0.5s;

    &:hover {
      background-color: ${({ theme }) => theme.colors.violet};
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;
