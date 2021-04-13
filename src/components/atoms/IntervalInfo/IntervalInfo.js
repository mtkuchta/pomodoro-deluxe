import { Wrapper, StyledText } from './IntervalInfo.styled';
import { handleIntervalInfo } from '../../../assets/helpers/handleIntervalInfo';

const IntervalInfo = ({ isRunning, isWorkInterval, activeTask }) => {
  const text = handleIntervalInfo(isRunning, isWorkInterval);

  return (
    <Wrapper>
      <StyledText key={text}>{activeTask ? text : null}</StyledText>
    </Wrapper>
  );
};

export default IntervalInfo;
