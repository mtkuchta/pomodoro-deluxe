import { Wrapper, StyledIcon } from './Task.style';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import TaskEditForm from '../TaskEditForm/TaskEditForm';
import PropTypes from 'prop-types';
import TaskTotalTime from '../../atoms/TaskTotalTime/TaskTotalTime';

const Task = ({ title, isActive, id, task, handleSetActiveTask, showTaskDetails }) => {
  return (
    <Wrapper id={id} isActive={isActive ? true : false} isOpen={task.isOpen}>
      <StyledIcon icon={faCheckCircle} isActive={isActive ? true : false} onClick={handleSetActiveTask} />
      <p onClick={showTaskDetails}>{title}</p>
      {task.isOpen && <TaskEditForm isOpen={task.isOpen} task={task} handleClose={showTaskDetails} />}
      {task.isOpen && <TaskTotalTime time={task.totalTime} />}
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
