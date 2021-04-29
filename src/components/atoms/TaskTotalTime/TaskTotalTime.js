import { StyledTime } from './TaskTotalTime.style';
import PropTypes from 'prop-types';

const TaskTotalTime = ({ time }) => {
  const hours = Math.floor(time / 3600).toFixed(0);
  const minutes = ((time % 3600) / 60).toFixed(0);

  return <StyledTime>{` Total work time: ${hours}h ${minutes}m`}</StyledTime>;
};

TaskTotalTime.propTypes = {
  time: PropTypes.number,
};

export default TaskTotalTime;
