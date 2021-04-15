import React, { useContext } from 'react';
import { Wrapper } from './Counter.style';
import CounterDisplay from '../../atoms/CounterDisplay/CounterDisplay';
import Button from '../../atoms/Button/Button';

import { PomodoroContext } from '../../../providers/PomodoroProvider';
import Sound from '../../atoms/Sound/Sound';

const Counter = () => {
  const {
    counter: { isRunning, counterValue },
    tasks: { tasks },
    handleStartStopCount,
  } = useContext(PomodoroContext);

  const isActiveTask = tasks.findIndex((task) => task.isActive === true) !== -1 ? true : false;
  return (
    <Wrapper>
      <CounterDisplay value={counterValue} isRunning={isRunning} />
      <Button onClick={handleStartStopCount} text={isRunning ? 'stop' : 'start'} disabled={isActiveTask ? false : true} />
      <Sound counterValue={counterValue} isRunning={isRunning} />
    </Wrapper>
  );
};

export default Counter;
