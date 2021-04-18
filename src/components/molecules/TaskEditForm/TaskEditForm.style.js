import styled from 'styled-components';

export const StyledForm = styled.form`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 90%;
  padding-left: 10px;
  animation: showForm 1s ease-in-out;

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
`;

export const StyledTextArea = styled.textarea`
  width: 90%;
  height: 35%;
  font-size: 1.6em;
  background-color: transparent;
  border: none;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.white};

  &:focus {
    outline: none;
    color: ${({ theme }) => theme.colors.green};
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
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
`;
