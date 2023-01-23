export function validateEmail(email: string): any {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export const hasLowercase = (text: string) => /[a-z]/.test(text);
export const hasUppercase = (text: string) => /[A-Z]/.test(text);
export const hasNumber = (text: string) => /\d/.test(text);
export const hasSpecialcase = (text: string) => {
  var format = /[!@#$%^&*()_+\-=\]{};':"\\|,.<>?]+/;
  return format.test(text);
};
