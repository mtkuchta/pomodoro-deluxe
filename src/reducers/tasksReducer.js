import { types } from '../assets/types';

export const tasksReducer = (state, action) => {
  switch (action.type) {
    case types.updateTasks:
      return {
        ...state,
        tasks: action.tasks,
      };
    default:
      return state;
  }
};
