export type ColorsList =
  | "danger"
  | "success"
  | "primary"
  | "accent"
  | "default"
  | "success-light"
  | "accent-light"
  | "danger-light"
  | "primary-light";

export type ButtonSizeType = "lg" | "sm" | "md";

export const ButtonSize = (key: ButtonSizeType): string => {
  switch (key) {
    case "sm":
      return "py-1 px-2 text-sm";
    case "md":
      return "py-3 px-4 text-md";
    case "lg":
      return "py-4 px-5 text-lg";
    default:
      return "";
  }
};

export const ColorsForButtons = (key: ColorsList): string => {
  switch (key) {
    case "accent":
      return "bg-blue-700 text-white hover:bg-opacity-90";
    case "accent-light":
      return "bg-blue-100 border border-blue-800 hover:bg-blue-700 hover:text-white";
    case "danger":
      return "bg-red-500 hover:bg-red-600  text-white";
    case "danger-light":
      return "bg-red-100 hover:bg-red-600 text-red-800 hover:text-white";
    case "primary":
      return "bg-primary-800 hover:bg-opacity-90  text-white";
    case "primary-light":
      return "bg-blue-100 text-primary-800 hover:bg-primary-800  hover:text-white";
    case "success":
      return "bg-green-500 hover:bg-green-600  text-white";
    case "success-light":
      return "bg-green-100 text-green-800 hover:text-white hover:bg-green-600  text-white";
    case "default":
      return "bg-gray-100 hover:bg-gray-200  text-black";
    default:
      return "";
  }
};
