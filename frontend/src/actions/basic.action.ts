import axios from "axios";
import { Dispatch } from "redux";
import { APP_TOKEN_NAME, APP_URL } from "../config/app.config";
import { setAxiosToken } from "../utils/AxiosToken";
import { errorToText } from "../utils/errors";
import { SaveAuthData } from "./auth.action";
import { ActionTypes } from "./types";

// action url
const url = APP_URL;

/**
 * * ****************************** INTERFACES *****************************
 */

export interface Basic {
  loading: boolean;
}

/**
 * * ****************************** ACTIONS *****************************
 */
export interface AddBasicInfo {
  type: ActionTypes.ADD_BASIC_INFO;
  payload: Basic;
}

interface UpdateProfileData {
  email: string;
  first_name: string;
  last_name: string;
  middle_name: string;
  phone: string;
}

export interface UpdateProfile_TYPE {
  type: ActionTypes.UPDATE_PROFILE;
  payload: UpdateProfileData;
}
export type FT_AddBasicInfo = (
  callBack: (status: boolean, msg: string) => void
) => void;
export const FC_AddBasicInfo = (
  callBack: (status: boolean, msg: string) => void
) => {
  return async (dispatch: Dispatch) => {
    try {
      setAxiosToken();
      const res = await axios.get<Basic>(`${url}/basicinfos/acalqual`);
      // * save data
      dispatch<AddBasicInfo>({
        type: ActionTypes.ADD_BASIC_INFO,
        payload: res.data,
      });
      callBack(true, "");
    } catch (error) {
      callBack(
        false,
        errorToText(error, () => {})
      );
    }
  };
};

export type FT_UpdateProfile = (
  data: UpdateProfileData,
  callBack: (status: boolean, msg: string) => void
) => void;

export const FC_UpdateProfile = (
  data: UpdateProfileData,
  callBack: (status: boolean, msg: string) => void
) => {
  return async (dispatch: Dispatch) => {
    try {
      setAxiosToken();
      await axios.put<Basic>(`${url}/auth/edit-profile`, data);
      // * save data
      dispatch<UpdateProfile_TYPE>({
        type: ActionTypes.UPDATE_PROFILE,
        payload: data,
      });

      callBack(true, "");
    } catch (error) {
      callBack(
        false,
        errorToText(error, () => {})
      );
    }
  };
};
