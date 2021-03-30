import React, { useContext } from 'react';
import { Wrapper, StyledText } from './IntervalInfo.styled';
import { PomodoroContext } from '../../../providers/PomodoroProvider';
import { handleIntervalInfo } from '../../../assets/helpers/handleIntervalInfo';

const IntervalInfo = () => {
  const {
    state: { isRunning, isWorkInterval },
  } = useContext(PomodoroContext);

  const text = handleIntervalInfo(isRunning, isWorkInterval);

  return (
    <Wrapper>
      <StyledText key={text}>{text}</StyledText>
    </Wrapper>
  );
};

export default IntervalInfo;
