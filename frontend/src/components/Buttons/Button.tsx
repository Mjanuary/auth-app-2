import React, { FC, ReactElement } from "react";
import {
  ButtonSize,
  ButtonSizeType,
  ColorsForButtons,
  ColorsList,
} from "./ButtonTypes";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

type ButtonProps = {
  onClick?: (event: any) => void;
  children: React.ReactNode;
  type?: "submit" | "button";
  full?: boolean;
  disabled?: boolean;
  theme?: ColorsList;
  className?: string;
  size?: ButtonSizeType;
  loading?: boolean;
};
const Func = () => {};

const Button: FC<ButtonProps> = ({
  onClick = Func,
  children,
  theme = "accent",
  type = "submit",
  full = false,
  disabled = false,
  className = "",
  size = "md",
  loading = false,
}): ReactElement => {
  return (
    <button
      className={`
      ${ButtonSize(size)} 
      ${full ? "w-full" : ""} 
      font-bold rounded 
      ${ColorsForButtons(theme)} 
      ${className}`}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {loading ? (
        <AiOutlineLoading3Quarters className="loading-animate text-2xl inline" />
      ) : (
        children
      )}
    </button>
  );
};
export default Button;
