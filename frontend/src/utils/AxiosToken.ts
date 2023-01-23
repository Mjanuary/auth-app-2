import axios from "axios";
import { APP_TOKEN_NAME, APP_HEADER_NAME } from "../config/app.config";

export const setAxiosToken = (token: string | null | undefined = null) => {
  if (token !== null && token !== undefined) {
    axios.defaults.headers.common[`${APP_HEADER_NAME}`] = token;
  } else if (localStorage[APP_TOKEN_NAME]) {
    // console.log({ header_jwt: localStorage[APP_TOKEN_NAME] });

    axios.defaults.headers.common[`${APP_HEADER_NAME}`] =
      localStorage[APP_TOKEN_NAME];
  } else {
    delete axios.defaults.headers.common[`${APP_HEADER_NAME}`];
  }
};
