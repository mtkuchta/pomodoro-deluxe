import React, { useContext, useState } from 'react';
import { StyledForm } from './SettingsForm.style';
import { useLocalStorage } from '../../../hooks/useLocalStorage';

import FormField from '../../atoms/FormField/FormField';

import { PomodoroContext } from '../../../providers/PomodoroProvider';
import SubmitButton from '../../atoms/SubmitButton/SubmitButton';

const initialSettings = {
  workTime: 25,
  shortBreak: 5,
  longBreak: 20,
  longBreakIntervals: 4,
};

const SettingsForm = () => {
  const { handleSaveSettings } = useContext(PomodoroContext);
  const { saveDataInStorage, getDataFromStorage } = useLocalStorage();
  const [settingsValues, setSettingsValues] = useState(getDataFromStorage('intervals') || initialSettings);

  const handleSettingsInputChange = (e) => {
    setSettingsValues({ ...settingsValues, [e.target.name]: Number(e.target.value) });
  };

  return (
    <StyledForm>
      <FormField
        name="workTime"
        id="workTime"
        label="Work time"
        value={settingsValues.workTime}
        onChange={handleSettingsInputChange}
      />
      <FormField
        name="shortBreak"
        id="shortBreak"
        label="Short break"
        value={settingsValues.shortBreak}
        onChange={handleSettingsInputChange}
      />
      <FormField
        name="longBreak"
        id="longtBreak"
        label="Long break"
        value={settingsValues.longBreak}
        onChange={handleSettingsInputChange}
      />
      <FormField
        name="longBreakIntervals"
        id="longtBreakIntervals"
        label="Long break intervals"
        value={settingsValues.longBreakIntervals}
        onChange={handleSettingsInputChange}
      />
      <SubmitButton onClick={() => handleSaveSettings(settingsValues)} />
    </StyledForm>
  );
};

export default SettingsForm;
