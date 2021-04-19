import { useState } from 'react';
import { Wrapper, StyledIcon } from './Task.style';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import TaskEditForm from '../TaskEditForm/TaskEditForm';
import PropTypes from 'prop-types';

const Task = ({ title, isActive, onClick, id, task }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = (e) => {
    e.preventDefault();
    if (isOpen) return;
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Wrapper id={id} isActive={isActive ? true : false} isOpen={isOpen ? true : false} onClick={handleOpen}>
      <StyledIcon icon={faCheckCircle} isActive={isActive ? true : false} onClick={onClick} />
      <p>{title}</p>
      <TaskEditForm isOpen={isOpen ? true : false} task={task} handleClose={handleClose} />
    </Wrapper>
  );
};

Task.propTypes = {
  title: PropTypes.string,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
  id: PropTypes.number,
  task: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    isActive: PropTypes.bool,
  }),
};

export default Task;
