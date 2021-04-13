export const setActiveTask = (tasks, id) => {
  return tasks.map((task) => {
    if (task.id === id) {
      task.isActive = !task.isActive;
    } else {
      task.isActive = false;
    }
    return task;
  });
};
