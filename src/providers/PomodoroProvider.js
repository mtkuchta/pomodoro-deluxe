import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import * as workerTimers from 'worker-timers';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useCounter } from '../hooks/useCounter';
import { useSettings } from '../hooks/useSettings';
import { useTasks } from '../hooks/useTasks';
import { initialSettings } from '../assets/initialSettings';

export const PomodoroContext = React.createContext({
  settings: initialSettings,
  handleStartStopCount: () => {},
  handleShowSettings: () => {},
  handleSaveSettings: () => {},
  handleDefaultSettings: () => {},
  handleSetActiveTask: () => {},
  handleAddTask: () => {},
});

export const PomodoroProvider = ({ children }) => {
  const { counter, handleCount, handleEndInterval, setNextInterval, setCounterValue, handleStartStopCount } = useCounter();
  const { settings, showHideSettings, saveSettings, restoreDefaultSettings, getSettingsFromStorage } = useSettings();
  const {
    tasks,
    handleSetActiveTask,
    handleAddTask,
    getTasksFromStorage,
    handleDeleteTask,
    handleSaveTask,
    calculateTotalTime,
    showTaskDetails,
  } = useTasks();
  const { saveDataInStorage } = useLocalStorage();

  const history = useHistory();
  let location = useLocation();

  useEffect(() => {
    getSettingsFromStorage();
    getTasksFromStorage();
  }, []);

  useEffect(() => {
    if (counter.isRunning) {
      const interval = workerTimers.setInterval(() => {
        handleCount();
      }, 1000);
      return () => workerTimers.clearInterval(interval);
    }
    return undefined;
  }, [counter.isRunning]);

  useEffect(() => {
    if (counter.isWorkInterval) calculateTotalTime();
    handleEndInterval();
  }, [counter.counterValue]);

  useEffect(() => {
    setNextInterval(settings);
  }, [counter.isWorkInterval]);

  useEffect(() => {
    saveDataInStorage('intervals', settings.intervals);
    setCounterValue(settings);
  }, [settings.intervals]);

  useEffect(() => {
    saveDataInStorage('tasks', tasks.tasks);
  }, [tasks.tasks]);

  useEffect(() => {
    if (location.pathname === '/') showTaskDetails();
  }, [location]);

  return (
    <PomodoroContext.Provider
      value={{
        counter,
        settings,
        tasks,
        history,
        showHideSettings,
        saveSettings,
        restoreDefaultSettings,
        handleSetActiveTask,
        handleAddTask,
        handleStartStopCount,
        handleDeleteTask,
        handleSaveTask,
        showTaskDetails,
      }}
    >
      {children}
    </PomodoroContext.Provider>
  );
};

export default PomodoroProvider;
