export const setIsOpen = (tasks, id) => {
  if (!id && tasks)
    return tasks.map((task) => {
      task.isOpen = false;
      return task;
    });

  return tasks.map((task) => {
    if (task.id === id && !task.isOpen) {
      task.isOpen = !task.isOpen;
    } else {
      task.isOpen = false;
    }
    return task;
  });
};
