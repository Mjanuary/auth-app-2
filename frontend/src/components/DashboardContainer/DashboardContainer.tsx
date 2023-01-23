import React, { FC, ReactElement } from "react";

type TextInputProps = {
  children: React.ReactNode;
  className?: string;
  container?: boolean;
};

const DashboardContainer: FC<TextInputProps> = ({
  children,
  className = "",
  container = true,
}): ReactElement => {
  return (
    <div
      className={
        container ? "container mx-auto p-2 lg:p-2 w-full " : "p-2 lg:p-3"
      }
    >
      <div
        className={`bg-white dark:bg-dark-800 dark:text-white rounded border border-gray-200 dark:border-gray-600 p-2 px-3 ${className}`}
      >
        {children}
      </div>
    </div>
  );
};
export default DashboardContainer;
