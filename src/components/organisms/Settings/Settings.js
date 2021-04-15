import React, { useContext } from 'react';
import { Wrapper, StyledText } from './Settings.style';

import { PomodoroContext } from '../../../providers/PomodoroProvider';
import SettingsForm from '../SettingsForm/SettingsForm';

const Settings = () => {
  const { settings, handleShowSettings } = useContext(PomodoroContext);
  return (
    <Wrapper isSettingsActive={settings.isSettingsActive}>
      <StyledText onClick={handleShowSettings}>settings</StyledText>
      <SettingsForm />
    </Wrapper>
  );
};

export default Settings;
