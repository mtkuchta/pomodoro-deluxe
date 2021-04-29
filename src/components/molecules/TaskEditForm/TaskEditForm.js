import { useEffect, useState, useContext } from 'react';
import { StyledForm, StyledLabel, StyledInput, StyledTextArea, ButtonContainer, StyledButton } from './TaskEditForm.style';
import { PomodoroContext } from '../../../providers/PomodoroProvider';
import PropTypes from 'prop-types';

const TaskEditForm = ({ task, isOpen, handleClose }) => {
  const [formValues, setFormValues] = useState({ title: '', description: '' });
  const initialTaskValues = { title: task.title, description: task.description };
  const { handleDeleteTask, handleSaveTask } = useContext(PomodoroContext);

  useEffect(() => {
    setFormValues(initialTaskValues);
  }, []);

  const handleInputChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleCancel = () => {
    setFormValues(initialTaskValues);
    handleClose();
  };

  const handleSaveModifiedTask = (e) => {
    e.preventDefault();
    handleSaveTask(e, formValues.title, formValues.description);
    handleClose();
  };

  return (
    <StyledForm isOpen={isOpen ? true : false}>
      <StyledLabel htmlFor="title">Task title</StyledLabel>
      <StyledInput type="text" name="title" value={formValues.title} id="title" onChange={handleInputChange} />
      <StyledLabel htmlFor="description">Description</StyledLabel>
      <div>
        <StyledTextArea
          id="description"
          name="description"
          rows="2"
          maxLength="150"
          value={formValues.description}
          onChange={handleInputChange}
          placeholder="Write task descrition..."
        />
      </div>

      <ButtonContainer>
        <StyledButton onClick={handleSaveModifiedTask}>Save</StyledButton>
        <StyledButton onClick={handleDeleteTask}>Delete</StyledButton>
        <StyledButton onClick={handleCancel}>Cancel</StyledButton>
      </ButtonContainer>
    </StyledForm>
  );
};

TaskEditForm.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    isActive: PropTypes.bool,
  }),
  isOpen: PropTypes.bool,
  handleClose: PropTypes.func,
};

export default TaskEditForm;
