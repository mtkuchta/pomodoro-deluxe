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
    default:
      return state;
  }
};
