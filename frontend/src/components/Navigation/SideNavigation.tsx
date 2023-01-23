import React, { FC, ReactElement } from "react";
import { connect } from "react-redux";
import { StoreState } from "../../reducers";
import { App, Auth, FC_SideNav, FT_SideNav } from "../../actions";
import { NavLink } from "react-router-dom";
import { MdHome } from "react-icons/md";
import { MdDashboard } from "react-icons/md";
import { checkAccess, UsersAccess } from "../../utils/access";

type RenderBuiltInComponentProps = {
  auth: Auth;
  app: App;
  FC_SideNav: FT_SideNav;
};

const _RenderBuiltInComponent: FC<RenderBuiltInComponentProps> = ({
  app,
  auth,
}): ReactElement | null => {
  let access_list = auth.user?.access;

  if (auth.isAuthenticated === false) return null;
  return (
    <nav
      className={`overflow-auto
        bg-white dark:bg-dark-800 dark:text-white 
        pr-3 pl-0 py-1 border-gray-200 dark:border-gray-700 
        border-r p-2 pt-20 fixed bottom-0 ${
          app.side_menu === true ? "lg:left-0 left-0" : "-left-80 lg:left-0"
        }  top-0 z-40 w-60
    `}
    >
      <div className="mt-8 mb-1 side-navigation-container">
        <NavLink to={"/"} className={`navigation-item `} exact>
          <div className="mr-1">
            <MdHome className="text-2xl" />
          </div>
          <span className="flex-1">Home</span>
        </NavLink>

        <NavLink to={"/dashboard"} className={`navigation-item `} exact>
          <div className="mr-1">
            <MdDashboard className="text-2xl" />
          </div>
          <span className="flex-1">Dashboard</span>
        </NavLink>

        {checkAccess(access_list, UsersAccess.CREATE_UPI) && (
          <NavLink to={"/request-form"} className={`navigation-item `} exact>
            <div className="mr-1">
              <MdHome className="text-2xl" />
            </div>
            <span className="flex-1">Request form</span>
          </NavLink>
        )}

        {checkAccess(access_list, UsersAccess.LIST_OF_REQUESTS) && (
          <NavLink to={"/request-form"} className={`navigation-item `} exact>
            <div className="mr-1">
              <MdHome className="text-2xl" />
            </div>
            <span className="flex-1">List of requests</span>
          </NavLink>
        )}

        {checkAccess(access_list, UsersAccess.LIST_OF_UPIS) && (
          <NavLink to={"/request-form"} className={`navigation-item `} exact>
            <div className="mr-1">
              <MdHome className="text-2xl" />
            </div>
            <span className="flex-1">List of upi</span>
          </NavLink>
        )}

        {checkAccess(access_list, UsersAccess.REPORTS) && (
          <NavLink to={"/request-form"} className={`navigation-item `} exact>
            <div className="mr-1">
              <MdHome className="text-2xl" />
            </div>
            <span className="flex-1">Reports</span>
          </NavLink>
        )}
      </div>
    </nav>
  );
};

const mapStateToProps = ({
  app,
  auth,
}: StoreState): { app: App; auth: Auth } => {
  return { app: app, auth: auth };
};

const RenderBuiltInComponent = connect(mapStateToProps, { FC_SideNav })(
  _RenderBuiltInComponent
);

export default RenderBuiltInComponent;
