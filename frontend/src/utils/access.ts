export enum UsersAccess {
  REPORTS = "REPORTS",
  DELETE_USER = "DELETE_USER",
  CREATE_UPI = "CREATE_UPI",
  REQUEST = "REQUEST",
  LIST_OF_UPIS = "LIST_OF_UPIS",
  APPROVE_UPI_REQUEST = "APPROVE_UPI_REQUEST",
  LIST_OF_REQUESTS = "LIST_OF_REQUESTS",
  APPROVE_REQUESTS = "APPROVE_REQUESTS",
  REJECT_REQUEST = "REJECT_REQUEST",
}

export const checkAccess = (
  role: string | null | undefined,
  userAccess: UsersAccess
) => {
  if (role === undefined || role === null) {
    return false;
  } else {
    return role.indexOf(userAccess) >= 0 ? true : false;
  }
};

export const RenderPageAccess = (
  role: string | null | undefined,
  userAccess: UsersAccess,
  callBack: () => void
) => {
  if (!checkAccess(role, userAccess)) {
    window.location.href = "/dashboard";
    return;
  } else {
    callBack();
  }
};
