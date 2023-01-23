import React, { FC, ReactElement } from "react";
import { NavLink } from "react-router-dom";

type NavigationButtonProps = {
  to: string;
  title: string;
  border?: boolean;
  exact?: boolean;
};

const NavigationButton: FC<NavigationButtonProps> = ({
  to,
  title,
  border = false,
  exact = false,
}): ReactElement => {
  /* function body */
  return !border ? (
    <li className="mr-2">
      <NavLink
        exact={exact}
        className="top-navigation text-primary-800 dark:text-white dark:hover:text-white dark:hover:border-dark-800 dark:hover:border p-3 rounded hover:bg-accent-800 hover:text-black"
        to={to}
      >
        {title}
      </NavLink>
    </li>
  ) : (
    <li className="mr-2">
      <NavLink
        className="top-navigation action-button py-3 px-4 border-primary-800 dark:border-accent-900 border text-primary-800 dark:text-accent-800 font-bold rounded"
        to={to}
      >
        {title}
      </NavLink>
    </li>
  );
};
export default NavigationButton;
