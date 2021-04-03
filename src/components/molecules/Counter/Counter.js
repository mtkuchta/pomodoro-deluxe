import React, { useContext } from 'react';
import { Wrapper } from './Counter.style';
import CounterDisplay from '../../atoms/CounterDisplay/CounterDisplay';
import Button from '../../atoms/Button/Button';

import { PomodoroContext } from '../../../providers/PomodoroProvider';
import IntervalInfo from '../../atoms/IntervalInfo/IntervalInfo';
import Sound from '../../atoms/Sound/Sound';

const Counter = () => {
  const {
    state: { isRunning, counterValue },
    handleStartStopCount,
  } = useContext(PomodoroContext);
  return (
    <Wrapper>
      <CounterDisplay value={counterValue} isRunning={isRunning} />
      <IntervalInfo />
      <Button onClick={handleStartStopCount} text={isRunning ? 'stop' : 'start'} />
      <Sound counterValue={counterValue} isRunning={isRunning} />
    </Wrapper>
  );
};

export default Counter;
