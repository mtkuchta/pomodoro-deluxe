import React, { useEffect, useReducer } from 'react';
import { types } from '../assets/types';
import { reducer } from '../reducers/reducer';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { initialSettings } from '../assets/initialSettings';

import { handleNextInterval } from '../assets/helpers/handleNextInterval';
import SettingsForm from '../components/organisms/SettingsForm/SettingsForm';

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

  useEffect(() => {
    saveDataInStorage('intervals', state.intervals);
    dispatch({ type: types.setCounterValue, value: state.intervals.workTime });
  }, [state.intervals]);

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

  const handleDefaultSettings = () => {
    dispatch({ type: types.saveSettings, intervals: initialSettings });
  };

  return (
    <PomodoroContext.Provider
      value={{ state, handleStartStopCount, handleShowSettings, handleSaveSettings, handleDefaultSettings }}
    >
      {children}
    </PomodoroContext.Provider>
  );
};

export default PomodoroProvider;
