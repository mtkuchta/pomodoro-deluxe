import React, { useState, useEffect, useReducer } from 'react';
import { types } from '../assets/types';

import { handleNextInterval } from '../assets/helpers/handleNextInterval';

export const PomodoroContext = React.createContext({
  intervals: { workTime: 1500000, shortBreak: 30000, longBreak: 1200000 },
  counterValue: 0,
  handleStartStopCount: () => {},
});

const reducer = (state, action) => {
  switch (action.type) {
    case types.count:
      return {
        ...state,
        counterValue: state.counterValue - 1000,
      };
    case types.setIsRunning:
      return {
        ...state,
        isRunning: !state.isRunning,
      };
    case types.setIsWorkInterval:
      return {
        ...state,
        isWorkInterval: !state.isWorkInterval,
      };

    case types.setInterval:
      return {
        ...state,
        counterValue: action.value,
      };
    case types.increaseIntervals:
      return {
        ...state,
        intervalsNumber: action.isWorkInterval ? state.intervalsNumber + 1 : state.intervalsNumber,
      };
    default:
      return state;
  }
};

const initialState = {
  intervals: { workTime: 15000, shortBreak: 30000, longBreak: 1200000 },
  isWorkInterval: true,
  counterValue: 15000,
  isRunning: false,
  intervalsNumber: 0,
};

export const PomodoroProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (state.isRunning) {
      const interval = setInterval(() => {
        dispatch({ type: types.count });
      }, 1000);
      return () => clearInterval(interval);
    }
    return undefined;
  }, [state.isRunning]);

  useEffect(() => {
    if (state.counterValue === 0) {
      dispatch({ type: types.setIsRunning });
      dispatch({ type: types.increaseIntervals, isWorkInterval: state.isWorkInterval });
      dispatch({ type: types.setIsWorkInterval });
    }
  }, [state.counterValue]);

  useEffect(() => {
    dispatch({
      type: types.setInterval,
      value: handleNextInterval(state.isWorkInterval, state.intervalsNumber, state.intervals),
    });
  }, [state.isWorkInterval]);

  const handleStartStopCount = () => {
    dispatch({ type: types.setIsRunning });
  };

  return <PomodoroContext.Provider value={{ state, handleStartStopCount }}>{children}</PomodoroContext.Provider>;
};

export default PomodoroProvider;