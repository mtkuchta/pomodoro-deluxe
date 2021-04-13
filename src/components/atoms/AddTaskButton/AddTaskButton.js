import styled from 'styled-components';

const StyledButton = styled.button`
  width: 90%;
  height: ${({ isOpen }) => (isOpen ? '20%' : '100%')};
  border: none;
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
`;

const AddTaskButton = ({ onClick, isOpen }) => {
  return (
    <StyledButton onClick={onClick} isOpen={isOpen}>
      Add task...
    </StyledButton>
  );
};

export default AddTaskButton;
