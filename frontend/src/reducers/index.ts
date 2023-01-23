import { combineReducers } from "redux";
import { App, Auth, Basic } from "../actions";

import { authReducer } from "./auth.reducer";
import { appReducer } from "./app.reducer";
import { basicReducer } from "./basic.reducer";

// define the entire state into the entire sire
export interface StoreState {
  auth: Auth;
  app: App;
  basic: Basic;
}

export const reducers = combineReducers<StoreState>({
  auth: authReducer,
  app: appReducer,
  basic: basicReducer,
});
