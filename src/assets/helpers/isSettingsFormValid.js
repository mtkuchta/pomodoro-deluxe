export const isSettingsFormValid = (intervals) => {
  const { workTime, shortBreak, longBreak, longBreakIntervals } = intervals;
  const errors = { workTime: null, shortBreak: null, longBreak: null, longBreakIntervals: null };

  const isWorkTimeValid = workTime >= 5;
  const isShortBreakValid = shortBreak >= 1;
  const isLongBreakValid = longBreak >= 5;
  const isLongBreakIntervalsValid = longBreakIntervals >= 2;

  if (!isWorkTimeValid) {
    errors.workTime = 'Min work time is 5min';
  }

  if (!isShortBreakValid) {
    errors.shortBreak = 'Min short break is 1min';
  }

  if (!isLongBreakValid) {
    errors.longBreak = 'Min long break is 5min';
  }

  if (!isLongBreakIntervalsValid) {
    errors.longBreakIntervals = 'Min long break intervals is 2';
  }

  const isFormValid = isWorkTimeValid && isShortBreakValid && isLongBreakValid && isLongBreakIntervalsValid ? true : false;

  return { isValid: isFormValid, errors: errors };
};
