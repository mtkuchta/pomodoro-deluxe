import SettingsForm from './SettingsForm';
import { renderWithProviders } from '../../../assets/helpers/renderWithProviders';
import { fireEvent, screen } from '@testing-library/react';

describe('Settings Form', () => {
  const setup = () => {
    const testedComponent = renderWithProviders(<SettingsForm />);
    const workTimeInput = screen.getByLabelText('Work time:');
    const shortBreakInput = screen.getByLabelText('Short break:');
    const longBreakInput = screen.getByLabelText('Long break:');
    const longBreakIntervalsInput = screen.getByLabelText('Long break intervals:');
    const saveSettingsBtn = screen.getByText('Save settings');
    const defaultSettingsBtn = screen.getByText('Default settings');

    return {
      testedComponent,
      workTimeInput,
      shortBreakInput,
      longBreakInput,
      longBreakIntervalsInput,
      saveSettingsBtn,
      defaultSettingsBtn,
    };
  };

  const intervals = { workTime: 35, shortBreak: 6, longBreak: 22, longBreakIntervals: 7 };

  it('Shows errors if input is less than minimal value', () => {
    const { workTimeInput, shortBreakInput, longBreakInput, longBreakIntervalsInput } = setup();
    fireEvent.change(workTimeInput, { target: { value: 1 } });
    fireEvent.change(shortBreakInput, { target: { value: 0.5 } });
    fireEvent.change(longBreakInput, { target: { value: 4 } });
    fireEvent.change(longBreakIntervalsInput, { target: { value: 1 } });
    fireEvent.click(screen.getByText('Save settings'));
    screen.getByText('Min work time is 5min');
    screen.getByText('Min short break is 1min');
    screen.getByText('Min long break is 5min');
    screen.getByText('Min long break intervals is 2');
  });

  it('saves settings in local storage', () => {
    const { workTimeInput, shortBreakInput, longBreakInput, longBreakIntervalsInput, saveSettingsBtn } = setup();
    fireEvent.change(workTimeInput, { target: { value: intervals.workTime } });
    fireEvent.change(shortBreakInput, { target: { value: intervals.shortBreak } });
    fireEvent.change(longBreakInput, { target: { value: intervals.longBreak } });
    fireEvent.change(longBreakIntervalsInput, { target: { value: intervals.longBreakIntervals } });
    fireEvent.click(saveSettingsBtn);
    expect(JSON.parse(window.localStorage.getItem('intervals'))).toEqual(intervals);
  });

  it('restores default settings', () => {
    const {
      workTimeInput,
      shortBreakInput,
      longBreakInput,
      longBreakIntervalsInput,
      defaultSettingsBtn,
      saveSettingsBtn,
    } = setup();
    fireEvent.change(workTimeInput, { target: { value: intervals.workTime } });
    fireEvent.change(shortBreakInput, { target: { value: intervals.shortBreak } });
    fireEvent.change(longBreakInput, { target: { value: intervals.longBreak } });
    fireEvent.change(longBreakIntervalsInput, { target: { value: intervals.longBreakIntervals } });
    fireEvent.click(saveSettingsBtn);
    fireEvent.click(defaultSettingsBtn);
    expect(JSON.parse(window.localStorage.getItem('intervals'))).toEqual({
      workTime: 25,
      shortBreak: 5,
      longBreak: 20,
      longBreakIntervals: 4,
    });
  });
});
