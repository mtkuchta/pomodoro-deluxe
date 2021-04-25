import { useReducer } from 'react';
import { counterReducer } from '../reducers/counterReducer';
import { types } from '../assets/types';
import { handleNextInterval } from '../assets/helpers/handleNextInterval';

const initialState = {
  isWorkInterval: true,
  counterValue: 15000,
  isRunning: false,
  workIntervals: 0,
  tasks: [],
};

export const useCounter = () => {
  const [counter, dispatchCounter] = useReducer(counterReducer, initialState);

  const handleCount = () => {
    dispatchCounter({ type: types.count });
  };

  const handleEndInterval = () => {
    if (counter.counterValue === 0) {
      dispatchCounter({ type: types.setIsRunning });
      dispatchCounter({ type: types.increaseIntervals, isWorkInterval: counter.isWorkInterval });
      dispatchCounter({ type: types.setIsWorkInterval });
    }
  };

  const setNextInterval = (settings) => {
    dispatchCounter({
      type: types.setInterval,
      value: handleNextInterval(settings.isWorkInterval, settings.intervalsNumber, settings.intervals) * 1000 * 60,
    });
  };

  const setCounterValue = (settings) => {
    dispatchCounter({ type: types.setCounterValue, value: settings.intervals.workTime });
  };

  const handleStartStopCount = () => {
    dispatchCounter({ type: types.setIsRunning });
  };

  return {
    counter,
    handleCount,
    handleEndInterval,
    setNextInterval,
    setCounterValue,
    handleStartStopCount,
  };
};
