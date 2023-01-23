import React, { FC, ReactElement } from "react";
import {
  ButtonSize,
  SizeType,
  ColorsForButtons,
  ColorsList,
  Types,
} from "./HeadingTypes";

type HeadingProps = {
  children: React.ReactNode;
  type?: Types;
  theme?: ColorsList;
  className?: string;
  size?: SizeType;
};

const Heading: FC<HeadingProps> = ({
  children,
  theme = "default",
  type = "h3",
  className = "",
  size = "xl",
}): ReactElement | null => {
  if (type === "h1")
    return (
      <h1
        className={`
      ${ButtonSize(size)} w-full font-bold rounded 
      ${ColorsForButtons(theme)} 
      ${className}`}
      >
        {children}
      </h1>
    );

  if (type === "h2")
    return (
      <h3
        className={`
      ${ButtonSize(size)} w-full font-bold rounded 
      ${ColorsForButtons(theme)} 
      ${className}`}
      >
        {children}
      </h3>
    );

  if (type === "h3")
    return (
      <h3
        className={`
      ${ButtonSize(size)} w-full font-bold rounded 
      ${ColorsForButtons(theme)} 
      ${className}`}
      >
        {children}
      </h3>
    );

  if (type === "h3")
    return (
      <h3
        className={`
      ${ButtonSize(size)} w-full font-bold rounded 
      ${ColorsForButtons(theme)} 
      ${className}`}
      >
        {children}
      </h3>
    );

  return null;
};
export default Heading;
