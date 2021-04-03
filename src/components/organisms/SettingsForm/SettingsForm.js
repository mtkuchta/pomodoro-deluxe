import React, { useContext, useState, useEffect } from 'react';
import { StyledForm } from './SettingsForm.style';
import { useLocalStorage } from '../../../hooks/useLocalStorage';
import { initialSettings } from './../../../assets/initialSettings';
import { isSettingsFormValid } from '../../../assets/helpers/isSettingsFormValid';
import { PomodoroContext } from '../../../providers/PomodoroProvider';

import FormField from '../../atoms/FormField/FormField';
import FormButton from '../../atoms/FormButton/FormButton';
import ErrorMessage from '../../atoms/ErrorMessage/ErrorMessage';

const initialErrors = { workTime: null, shortBreak: null, longBreak: null, longBreakIntervals: null };

const SettingsForm = () => {
  const { state, handleSaveSettings, handleDefaultSettings } = useContext(PomodoroContext);
  const { saveDataInStorage, getDataFromStorage } = useLocalStorage();
  const [settingsValues, setSettingsValues] = useState(getDataFromStorage('intervals') || initialSettings);
  const [formErrors, setFormErrors] = useState(initialErrors);

  useEffect(() => {
    setSettingsValues(state.intervals);
  }, [state.intervals]);

  const handleSettingsInputChange = (e) => {
    setSettingsValues({ ...settingsValues, [e.target.name]: Number(e.target.value) });
  };

  const handleSubmitForm = () => {
    const { isValid, errors } = isSettingsFormValid(settingsValues);
    setFormErrors(initialErrors);
    if (isValid) {
      handleSaveSettings(settingsValues);
    } else {
      setFormErrors(errors);
    }
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
      {formErrors.workTime ? <ErrorMessage text={formErrors.workTime} /> : null}
      <FormField
        name="shortBreak"
        id="shortBreak"
        label="Short break"
        value={settingsValues.shortBreak}
        onChange={handleSettingsInputChange}
      />
      {formErrors.shortBreak ? <ErrorMessage text={formErrors.shortBreak} /> : null}
      <FormField
        name="longBreak"
        id="longtBreak"
        label="Long break"
        value={settingsValues.longBreak}
        onChange={handleSettingsInputChange}
      />
      {formErrors.longBreak ? <ErrorMessage text={formErrors.longBreak} /> : null}
      <FormField
        name="longBreakIntervals"
        id="longtBreakIntervals"
        label="Long break intervals"
        value={settingsValues.longBreakIntervals}
        onChange={handleSettingsInputChange}
      />
      {formErrors.longBreakIntervals ? <ErrorMessage text={formErrors.longBreakIntervals} /> : null}
      <FormButton onClick={handleSubmitForm} text="Save settings" />
      <FormButton onClick={handleDefaultSettings} text="Default settings" />
    </StyledForm>
  );
};

export default SettingsForm;