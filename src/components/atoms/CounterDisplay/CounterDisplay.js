import { formatTime } from '../../../assets/helpers/formatTime';
import { Wrapper, StyledTime } from './CounterDisplay.style';
import PropTypes from 'prop-types';

const CounterDisplay = ({ value, isRunning }) => {
  return (
    <Wrapper>
      <StyledTime isRunning={isRunning}>{formatTime(value)}</StyledTime>
    </Wrapper>
  );
};

CounterDisplay.propTypes = {
  value: PropTypes.number,
  isRunning: PropTypes.bool,
};

export default CounterDisplay;
