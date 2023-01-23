import { Auth, Action, ActionTypes } from "../actions";

// default state
const defaultState = {
  isAuthenticated: false,
  user: null,
} as Auth;

export const authReducer = (state: Auth = defaultState, action: Action) => {
  switch (action.type) {
    case ActionTypes.LOGOUT:
      return defaultState;
    case ActionTypes.LOGIN_DETAILS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      } as Auth;
    default:
      return state;
  }
};
