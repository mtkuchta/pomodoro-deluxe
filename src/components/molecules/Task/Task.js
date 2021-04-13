import { Wrapper, StyledIcon } from './Task.style';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const Task = ({ title, isActive, onClick, id }) => {
  return (
    <Wrapper onClick={onClick} id={id} isActive={isActive ? true : false}>
      <StyledIcon icon={faCheckCircle} isActive={isActive ? true : false} />
      <p>{title}</p>
    </Wrapper>
  );
};

export default Task;
