export type InputSizeType = "lg" | "sm" | "md";

export const InputSize = (key: InputSizeType): string => {
  switch (key) {
    case "sm":
      return "p-1 text-sm";
    case "md":
      return "p-2 px-4 text-md";
    case "lg":
      return "p-3 px-5 text-lg";
    default:
      return "";
  }
};
