import { Basic, Action, ActionTypes } from "../actions";

// default state
const defaultState = {
  loading: true,
} as Basic;

export const basicReducer = (state: Basic = defaultState, action: Action) => {
  switch (action.type) {
    case ActionTypes.LOGOUT:
      return defaultState;
    default:
      return state;
  }
};
