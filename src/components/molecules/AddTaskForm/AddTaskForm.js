import { useState, useContext } from 'react';
import { StyledForm, StyledTaskInput, ButtonsWrapper, FormButton } from './AddTaskForm.style';
import { PomodoroContext } from '../../../providers/PomodoroProvider';
import PropTypes from 'prop-types';

const AddTaskForm = ({ handleOpen }) => {
  const [taskInputValue, setTaskInputValue] = useState('');
  const { handleAddTask } = useContext(PomodoroContext);

  const handleInput = (e) => {
    setTaskInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddTask(taskInputValue);
    setTaskInputValue('');
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

AddTaskForm.propTypes = {
  handleOpen: PropTypes.func,
};

export default AddTaskForm;
