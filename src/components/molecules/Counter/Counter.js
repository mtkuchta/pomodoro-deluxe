import React, { useContext } from 'react';
import styled from 'styled-components';
import CounterDisplay from '../../atoms/CounterDisplay/CounterDisplay';
import Button from '../../atoms/Button/Button';

import { PomodoroContext } from '../../../providers/PomodoroProvider';

const Wrapper = styled.div`
  height: 60%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const Counter = () => {
  const { state, handleStartStopCount } = useContext(PomodoroContext);
  return (
    <Wrapper>
      <CounterDisplay value={state.counterValue} isRunning={state.isRunning} />
      <Button onClick={handleStartStopCount} text={state.isRunning ? 'stop' : 'start'} />
    </Wrapper>
  );
};

export default Counter;
