import { useReducer } from 'react';
import { settingsReducer } from '../reducers/settingsReducer';
import { types } from '../assets/types';
import { initialSettings } from '../assets/initialSettings';
import { useLocalStorage } from '../hooks/useLocalStorage';

export const useSettings = () => {
  const [settings, dispatchSettings] = useReducer(settingsReducer, initialSettings);
  const { getDataFromStorage } = useLocalStorage();

  const handleShowSettings = () => {
    dispatchSettings({ type: types.showSettings });
  };

  const handleSaveSettings = (intervals) => {
    dispatchSettings({ type: types.saveSettings, intervals });
  };

  const restoreDefaultSettings = () => {
    dispatchSettings({ type: types.saveSettings, intervals: initialSettings.intervals });
  };

  const getSettingsFromStorage = () => {
    const savedSettings = getDataFromStorage('intervals');
    handleSaveSettings(savedSettings);
  };

  return {
    settings,
    handleShowSettings,
    handleSaveSettings,
    restoreDefaultSettings,
    getSettingsFromStorage,
  };
};
