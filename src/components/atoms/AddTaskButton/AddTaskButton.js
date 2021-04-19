import { StyledButton } from './AddTaskButton.style';
import PropTypes from 'prop-types';

const AddTaskButton = ({ onClick, isOpen }) => {
  return (
    <StyledButton onClick={onClick} isOpen={isOpen}>
      Add task...
    </StyledButton>
  );
};

AddTaskButton.propTypes = {
  onClick: PropTypes.func,
  isOpen: PropTypes.bool,
};

export default AddTaskButton;
