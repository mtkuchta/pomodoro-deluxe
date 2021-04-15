import { useContext, useState, useEffect } from 'react';
import { Wrapper, StyledInterval } from './IntervalInfo.styled';
import { handleIntervalInfo } from '../../../assets/helpers/handleIntervalInfo';
import { PomodoroContext } from '../../../providers/PomodoroProvider';

const IntervalInfo = () => {
  const {
    counter: { isRunning, isWorkInterval, workIntervals },
    settings: {
      intervals: { longBreakIntervals },
    },
  } = useContext(PomodoroContext);

  const [currentInterval, setCurrentInterval] = useState('work');

  useEffect(() => {
    setCurrentInterval(handleIntervalInfo(isRunning, isWorkInterval, workIntervals, longBreakIntervals));
  }, [isWorkInterval]);

  return (
    <Wrapper>
      <StyledInterval className={currentInterval === 'work' ? 'active' : ''}>Work</StyledInterval>
      <StyledInterval className={currentInterval === 'shortBreak' ? 'active' : ''}>Short Break</StyledInterval>
      <StyledInterval className={currentInterval === 'longBreak' ? 'active' : ''}>Long Break</StyledInterval>
    </Wrapper>
  );
};

export default IntervalInfo;
