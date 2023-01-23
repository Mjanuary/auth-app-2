import { App, Action, ActionTypes } from "../actions";

// default state
const defaultState = {
  side_menu: false,
} as App;

export const appReducer = (state: App = defaultState, action: Action) => {
  switch (action.type) {
    case ActionTypes.TOGGLE_MENU:
      return { ...state, side_menu: action.payload } as App;
    default:
      return state;
  }
};
