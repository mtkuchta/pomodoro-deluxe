import { formatTime } from '../../../assets/helpers/formatTime';
import { Wrapper, StyledTime } from './CounterDisplay.style';

const CounterDisplay = ({ value, isRunning }) => {
  return (
    <Wrapper>
      <StyledTime isRunning={isRunning}>{formatTime(value)}</StyledTime>
    </Wrapper>
  );
};

export default CounterDisplay;
