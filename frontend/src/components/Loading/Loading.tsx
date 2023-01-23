import React, { FC, ReactElement } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

type LoadingProps = {
  className?: string;
};

const Loading: FC<LoadingProps> = ({ className = "" }): ReactElement => {
  return (
    <>
      <AiOutlineLoading3Quarters
        className={`loading-animate ${
          className === "" ? "text-6xl text-black dark:text-white" : ""
        } inline`}
      />
    </>
  );
};
export default Loading;
