import { useReducer } from 'react';
import { useHistory } from 'react-router-dom';
import { tasksReducer } from '../reducers/tasksReducer';
import { types } from '../assets/types';
import { setActiveTask } from '../assets/helpers/setActiveTask';
import { findId } from '../assets/helpers/findId';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { findTaskIndex } from '../assets/helpers/findTaskIndex';

export const useTasks = () => {
  const [tasks, dispatchTasks] = useReducer(tasksReducer, { tasks: [] });
  const { saveDataInStorage, getDataFromStorage } = useLocalStorage();
  let history = useHistory();

  const getTasksFromStorage = () => {
    const tasksList = getDataFromStorage('tasks');
    if (tasksList) dispatchTasks({ type: types.updateTasks, tasks: tasksList });
  };

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

  const handleDeleteTask = (e) => {
    const indexToDelete = findTaskIndex(e, tasks.tasks);
    const modifiedTasks = [...tasks.tasks];
    modifiedTasks.splice(indexToDelete, 1);
    dispatchTasks({ type: types.updateTasks, tasks: modifiedTasks });
  };

  const handleSaveTask = (e, title, description) => {
    const indexToModify = findTaskIndex(e, tasks.tasks);
    const modifiedTask = tasks.tasks[indexToModify];
    modifiedTask.title = title;
    modifiedTask.description = description;
    const tasksArr = [...tasks.tasks];
    tasksArr.splice(indexToModify, 1, modifiedTask);
    dispatchTasks({ type: types.updateTasks, tasks: tasksArr });
  };

  return {
    tasks,
    handleSetActiveTask,
    handleAddTask,
    getTasksFromStorage,
    handleDeleteTask,
    handleSaveTask,
  };
};
