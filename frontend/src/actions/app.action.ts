// import { Dispatch } from "redux";
import { ActionTypes } from "./types";

export interface App {
  side_menu: boolean;
}

export interface ToggleSideMenu {
  type: ActionTypes.TOGGLE_MENU;
  payload: boolean;
}

export type FT_SideNav = (status: boolean) => void;
export const FC_SideNav = (status: boolean) => {
  return {
    type: ActionTypes.TOGGLE_MENU,
    payload: status,
  } as ToggleSideMenu;
};
