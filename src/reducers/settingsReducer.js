import { types } from '../assets/types';

export const settingsReducer = (state, action) => {
  switch (action.type) {
    case types.showSettings:
      return {
        ...state,
        isSettingsActive: !state.isSettingsActive,
      };
    case types.saveSettings:
      return {
        ...state,
        intervals: action.intervals,
        isSettingsActive: false,
      };
    default:
      return state;
  }
};
