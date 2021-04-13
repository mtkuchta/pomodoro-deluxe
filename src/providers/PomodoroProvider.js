import React, { useEffect, useReducer } from 'react';
import { useHistory } from 'react-router-dom';
import { types } from '../assets/types';
import { reducer } from '../reducers/reducer';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { initialSettings } from '../assets/initialSettings';
import { handleNextInterval } from '../assets/helpers/handleNextInterval';
import { findId } from '../assets/helpers/findId';
import { setActiveTask } from '../assets/helpers/setActiveTask';

export const PomodoroContext = React.createContext({
  intervals: { workTime: 25, shortBreak: 5, longBreak: 20, longBreakIntervals: 4 },
  counterValue: 0,
  handleStartStopCount: () => {},
  handleShowSettings: () => {},
  handleSaveSettings: () => {},
  handleDefaultSettings: () => {},
  handleSetActiveTask: () => {},
  handleAddTask: () => {},
});

const initialState = {
  intervals: { workTime: 25, shortBreak: 5, longBreak: 20, longBreakIntervals: 4 },
  isWorkInterval: true,
  counterValue: 15000,
  isRunning: false,
  workIntervals: 0,
  isSettingsActive: false,
  activeTask: null,
  tasks: [],
};

export const PomodoroProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { saveDataInStorage, getDataFromStorage } = useLocalStorage();
  let history = useHistory();

  useEffect(() => {
    const settings = getDataFromStorage('intervals');
    const tasksList = getDataFromStorage('tasks');
    if (settings) dispatch({ type: types.saveSettings, intervals: settings });
    if (tasksList) dispatch({ type: types.updateTasks, tasks: tasksList });
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
      value: handleNextInterval(state.isWorkInterval, state.intervalsNumber, state.intervals) * 1000 * 60,
    });
  }, [state.isWorkInterval]);

  useEffect(() => {
    saveDataInStorage('intervals', state.intervals);
    dispatch({ type: types.setCounterValue, value: state.intervals.workTime });
  }, [state.intervals]);

  useEffect(() => {
    saveDataInStorage('tasks', state.tasks);
  }, [state.tasks]);

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

  const handleSetActiveTask = (e) => {
    const id = findId(e.target);
    dispatch({ type: types.updateTasks, tasks: setActiveTask(state.tasks, id) });
    saveDataInStorage('tasks', state.tasks);
    history.push('/');
  };

  const handleAddTask = (task) => {
    const newTaskId = Date.now();
    const newTask = { id: newTaskId, title: task, description: '', isActive: false };
    const updatedTasks = [...state.tasks];
    updatedTasks.push(newTask);
    dispatch({ type: types.updateTasks, tasks: setActiveTask(updatedTasks, newTaskId) });
  };

  return (
    <PomodoroContext.Provider
      value={{
        state,
        handleStartStopCount,
        handleShowSettings,
        handleSaveSettings,
        handleDefaultSettings,
        handleSetActiveTask,
        handleAddTask,
      }}
    >
      {children}
    </PomodoroContext.Provider>
  );
};

export default PomodoroProvider;
