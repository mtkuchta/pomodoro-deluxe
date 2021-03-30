import { types } from '../assets/types';

export const reducer = (state, action) => {
  switch (action.type) {
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
        intervalsNumber: action.isWorkInterval ? state.intervalsNumber + 1 : state.intervalsNumber,
      };
    default:
      return state;
  }
};
