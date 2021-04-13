import { useState, useContext } from 'react';
import styled from 'styled-components';

import { PomodoroContext } from '../../../providers/PomodoroProvider';

const StyledForm = styled.form`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledTaskInput = styled.input`
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
`;

const ButtonsWrapper = styled.div`
  width: 100%; ;
`;

const FormButton = styled.button`
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
`;

const AddTaskForm = ({ handleOpen }) => {
  const [taskInputValue, setTaskInputValue] = useState('');
  const { handleAddTask } = useContext(PomodoroContext);

  const handleInput = (e) => {
    setTaskInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddTask(taskInputValue);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledTaskInput type="text" placeholder="New task..." required value={taskInputValue} onChange={handleInput} />
      <ButtonsWrapper>
        <FormButton type="submit">Save</FormButton>
        <FormButton onClick={handleOpen}>Cancel</FormButton>
      </ButtonsWrapper>
    </StyledForm>
  );
};

export default AddTaskForm;
