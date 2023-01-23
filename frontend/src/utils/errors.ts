// import
export const errorToText = (error: any, NoInternet?: () => void): string => {
  console.error({ ...error });

  if (error?.response !== undefined) {
    if (
      Array.isArray(error?.response?.data?.errors) &&
      error?.response?.data?.errors.length >= 1 &&
      error?.response?.data?.errors[0].msg !== undefined
    ) {
      return error?.response?.data?.errors[0].msg;
    } else {
      return "Quelque chose c'est mal passé. Merci d'essayer plus tard";
    }
  } else {
    if (error?.request.status !== 0) {
      return error?.request.statusText;
    } else {
      if (NoInternet) NoInternet();
      return "Erreur réseau, veuillez vérifier votre connexion Internet";
    }
  }
};
