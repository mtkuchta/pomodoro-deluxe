export const handleIntervalInfo = (isRunning, isWorkInterval, workIntervals, longBreakIntervals) => {
  if (isRunning && !isWorkInterval && workIntervals % longBreakIntervals === 0) return 'longBreak';
  if (!isRunning && !isWorkInterval) return 'shortBreak';

  return 'work';
};
