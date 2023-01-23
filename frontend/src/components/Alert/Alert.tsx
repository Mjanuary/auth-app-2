import React, { FC, ReactElement } from "react";
import { AlertType, AlertSizeType } from "./AlertType";

type AlertProps = {
  children: React.ReactNode;
  theme?: AlertSizeType;
  className?: string;
  fixed?: boolean;
  onClick?: Function;
};

const Alert: FC<AlertProps> = ({
  onClick = () => {},
  children,
  theme = "info",
  className = "",
  fixed = false,
}): ReactElement => {
  return (
    <div
      onClick={() => onClick()}
      className={`
      text-center px-3 py-2 rounded 
      animate__animated 
      animate__fadeIn 
      animate__faster 
      my-1 
      ${AlertType(theme)} 
      ${className}
      ${
        fixed === true
          ? " fixed top-16 mt-2 z-50 right-2 animate__animated animate__slideInDown animate__faster"
          : ""
      }
      `}
    >
      {children}
    </div>
  );
};
export default Alert;
