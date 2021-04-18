import { findId } from './findId';

export const findTaskIndex = (e, tasks) => {
  const taskId = findId(e.target);
  const taskIndex = tasks.findIndex((task) => {
    return task.id === taskId;
  });
  return taskIndex;
};
