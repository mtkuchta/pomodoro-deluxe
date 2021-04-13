import { types } from '../assets/types';

export const reducer = (state, action) => {
  switch (action.type) {
    case types.setCounterValue:
      return {
        ...state,
        counterValue: action.value * 60 * 1000,
      };
    case types.count:
      return {
        ...state,
        counterValue: state.counterValue - 1000,
      };
    case types.setIsRunning:
      return {
        ...state,
        isRunning: !state.isRunning,
      };
    case types.setIsWorkInterval:
      return {
        ...state,
        isWorkInterval: !state.isWorkInterval,
      };
    case types.setInterval:
      return {
        ...state,
        counterValue: action.value,
      };
    case types.increaseIntervals:
      return {
        ...state,
        workIntervals: action.isWorkInterval ? state.workIntervals + 1 : state.workIntervals,
      };
    case types.showSettings:
      return {
        ...state,
        isSettingsActive: !state.isSettingsActive,
      };
    case types.saveSettings:
      return {
        ...state,
        intervals: action.intervals,
      };
    case types.updateTasks:
      return {
        ...state,
        tasks: action.tasks,
      };
    default:
      return state;
  }
};
