export const handleNextInterval = (isWorkInterval, intervalsNumber, intervals) => {
  if (isWorkInterval) return intervals.workTime;

  if (intervalsNumber % 4 === 0) return intervals.longBreak;

  return intervals.shortBreak;
};
