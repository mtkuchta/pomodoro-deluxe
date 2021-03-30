export const handleIntervalInfo = (isRunning, isWorkInterval) => {
  if (isRunning && isWorkInterval) return 'Work...';
  if (isRunning && !isWorkInterval) return 'Break...';
  if (!isRunning && isWorkInterval) return 'Start work !';
  if (!isRunning && !isWorkInterval) return 'Take a break :)';
};
