import React, { useEffect, useReducer } from 'react';
import { types } from '../assets/types';
import { reducer } from '../reducers/reducer';
import { useLocalStorage } from '../hooks/useLocalStorage';

import { handleNextInterval } from '../assets/helpers/handleNextInterval';

export const PomodoroContext = React.createContext({
  intervals: { workTime: 25, shortBreak: 5, longBreak: 20, longBreakIntervals: 4 },

  counterValue: 0,
  handleStartStopCount: () => {},
});

const initialState = {
  intervals: { workTime: 25, shortBreak: 5, longBreak: 20, longBreakIntervals: 4 },
  isWorkInterval: true,
  counterValue: 15000,
  isRunning: false,
  intervalsNumber: 0,
  isSettingsActive: false,
};

export const PomodoroProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { saveDataInStorage, getDataFromStorage } = useLocalStorage();

  useEffect(() => {
    const settings = getDataFromStorage('intervals');
    if (settings) dispatch({ type: types.saveSettings, intervals: settings });
  }, []);

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

  const handleShowSettings = () => {
    dispatch({ type: types.showSettings });
  };

  const handleSaveSettings = (intervals) => {
    dispatch({ type: types.saveSettings, intervals });
    dispatch({ type: types.showSettings });
  };

  return (
    <PomodoroContext.Provider value={{ state, handleStartStopCount, handleShowSettings, handleSaveSettings }}>
      {children}
    </PomodoroContext.Provider>
  );
};

export default PomodoroProvider;
