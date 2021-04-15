import { useReducer } from 'react';
import { useHistory } from 'react-router-dom';
import { tasksReducer } from '../reducers/tasksReducer';
import { types } from '../assets/types';
import { setActiveTask } from '../assets/helpers/setActiveTask';
import { findId } from '../assets/helpers/findId';
import { useLocalStorage } from '../hooks/useLocalStorage';

export const useTasks = () => {
  const [tasks, dispatchTasks] = useReducer(tasksReducer, { tasks: [] });
  const { saveDataInStorage, getDataFromStorage } = useLocalStorage();
  let history = useHistory();

  const handleSetActiveTask = (e) => {
    const id = findId(e.target);
    dispatchTasks({ type: types.updateTasks, tasks: setActiveTask(tasks.tasks, id) });
    saveDataInStorage('tasks', tasks.tasks);
    history.push('/');
  };

  const handleAddTask = (task) => {
    const newTaskId = Date.now();
    const newTask = { id: newTaskId, title: task, description: '', isActive: false };
    const updatedTasks = [...tasks.tasks];
    updatedTasks.push(newTask);
    dispatchTasks({ type: types.updateTasks, tasks: setActiveTask(updatedTasks, newTaskId) });
  };

  const getTasksFromStorage = () => {
    const tasksList = getDataFromStorage('tasks');
    if (tasksList) dispatchTasks({ type: types.updateTasks, tasks: tasksList });
  };

  return {
    tasks,
    handleSetActiveTask,
    handleAddTask,
    getTasksFromStorage,
  };
};
