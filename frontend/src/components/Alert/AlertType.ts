export type AlertSizeType = "danger" | "success" | "info";

export const AlertType = (key: AlertSizeType): string => {
  switch (key) {
    case "danger":
      return "text-white bg-red-500";
    case "info":
      return "text-white bg-blue-300";
    case "success":
      return "text-white bg-green-500";
    default:
      return "";
  }
};
