export type ColorsList =
  | "danger"
  | "success"
  | "primary"
  | "accent"
  | "auto"
  | "default";
export type SizeType = "lg" | "sm" | "md" | "xl";
export type Types = "h1" | "h2" | "h3";

export const ButtonSize = (key: SizeType): string => {
  switch (key) {
    case "sm":
      return "text-lg";
    case "md":
      return "text-xl";
    case "lg":
      return "text-2xl";
    case "xl":
      return "text-3xl";
    default:
      return "";
  }
};

export const ColorsForButtons = (key: ColorsList): string => {
  switch (key) {
    case "accent":
      return "text-accent-800";
    case "danger":
      return "text-red-500 dark:text-red-400";
    case "primary":
      return "text-primary-800 dark:text-blue-400";
    case "success":
      return "text-green-500 dark:text-green-400";
    case "auto":
      return "text-black dark:text-white";
    default:
      return "";
  }
};
