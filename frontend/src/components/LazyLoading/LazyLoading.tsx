import React, { FC, ReactElement } from "react";

type LazyLoadingProps = {};

const LazyLoading: FC<LazyLoadingProps> = (): ReactElement => {
  return (
    <div className="grid grid-cols-6 gap-4 animate-pulse container mx-auto p-8 text-center">
      <div className="col-span-4  flex-1">
        <div className="bg-gray-300 dark:bg-dark-800 rounded h-64 flex items-center justify-center">
          <h1 className="text-5xl text-gray-500 font-bold">Loading...</h1>
        </div>

        <div className="bg-gray-300 dark:bg-dark-800 h-10 mt-3 w-2/3 rounded"></div>
        <div className="bg-gray-300 dark:bg-dark-800 h-4 mt-3 rounded"></div>
        <div className="bg-gray-300 dark:bg-dark-800 h-4 mt-3 rounded"></div>
        <div className="bg-gray-300 dark:bg-dark-800 h-4 mt-3 rounded"></div>
        <div className="bg-gray-300 dark:bg-dark-800 h-4 mt-3 rounded"></div>
        <div className="bg-gray-300 dark:bg-dark-800 h-4 mt-3 rounded"></div>
        <div className="bg-gray-300 dark:bg-dark-800 h-4 mt-9 rounded"></div>
        <div className="bg-gray-300 dark:bg-dark-800 h-4 mt-3 rounded"></div>
        <div className="bg-gray-300 dark:bg-dark-800 h-4 mt-3 rounded"></div>
        <div className="bg-gray-300 dark:bg-dark-800 h-4 mt-3 rounded"></div>
      </div>
      <div className="col-span-2 flex-1">
        <div className="bg-gray-300 dark:bg-dark-800 h-80 rounded"></div>
        <div className="bg-gray-300 dark:bg-dark-800 h-80 rounded mt-4"></div>
      </div>
    </div>
  );
};
export default LazyLoading;
