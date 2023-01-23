import React, { FC, ReactElement, useState } from "react";
import { connect } from "react-redux";
import { StoreState } from "../../reducers";
import NavigationButton from "./NavigationButton";
import { MdAccountCircle, MdMenu, MdOutlineClose } from "react-icons/md";
import LogoImage from "../../assets/logo.jpg";
import {
  App,
  Auth,
  FC_Logout,
  FC_SideNav,
  FT_Logout,
  FT_SideNav,
} from "../../actions";
import Button from "../Buttons/Button";
import { NavLink } from "react-router-dom";

type RenderBuiltInComponentProps = {
  auth: Auth;
  app: App;
  FC_SideNav: FT_SideNav;
  FC_Logout: FT_Logout;
};

const AccountModal: FC<{
  auth: Auth;
  setAccount: (status: boolean) => void;
  Logout: () => void;
}> = ({ auth, setAccount, Logout }): ReactElement => {
  const { user } = auth;

  return (
    <>
      <div
        className="fixed top-0 right-0 left-0 bottom-0 z-40 bg-dark-800 opacity-10"
        onClick={setAccount.bind(this, false)}
      ></div>

      <div className=" rounded w-80 bg-white border-blue-500 border mt-1 border-opacity-60 z-50 dark:bg-dark-800 fixed top-29 right-3">
        <div className="text-center p-2 bg-primary-900 bg-opacity-60">
          <MdAccountCircle className="text-8xl text-white mx-auto" />

          <h6 className="text-center mt-1 text-white">{user?.first_name}</h6>
          <p className="pt-1 font-bold text-lg text-white ">
            {auth?.user?.first_name} {auth?.user?.last_name}
          </p>

          <label className="text-white bg-blue-600 px-2 py-1 rounded">
            {user?.role_name}
          </label>
        </div>

        <div className="p-2">
          <NavLink to={"/profile"} className={`mb-2 block`} exact>
            <Button theme="primary" full>
              Profile
            </Button>
          </NavLink>

          <Button theme="danger-light" full onClick={Logout}>
            Logout
          </Button>
        </div>
      </div>
    </>
  );
};

const _RenderBuiltInComponent: FC<RenderBuiltInComponentProps> = ({
  app,
  auth,
  FC_SideNav,
  FC_Logout,
}): ReactElement => {
  const [Account, setAccount] = useState(false);

  return (
    <>
      <nav className="bg-white dark:bg-dark-800 border-b border-gray-200 dark:border-gray-700 dark:text-white px-3 py-1  flex items-center sticky top-0 z-50">
        <div className="flex flex-1 items-center">
          {auth.isAuthenticated === true && (
            <div className="mr-2 lg:hidden">
              <button
                onClick={FC_SideNav.bind(this, !app.side_menu)}
                className=" border-primary-900 text-primary-900 dark:border-primary-100 border-2 p-0.5 rounded dark:text-white"
              >
                {app.side_menu ? (
                  <MdOutlineClose className="text-3xl" />
                ) : (
                  <MdMenu className="text-3xl" />
                )}
              </button>
            </div>
          )}
          <div className="h-14 flex items-center">
            {auth.isAuthenticated ? (
              <h1
                title="Teacher Management Information System"
                className="text-3xl text-primary-800 font-bold dark:text-primary-dark"
              >
                APP
              </h1>
            ) : (
              <img alt="APP" className="h-10" src={LogoImage} />
            )}
          </div>
        </div>
        <div className="">
          {auth.isAuthenticated === true && auth.user !== null ? (
            <div
              onClick={setAccount.bind(this, !Account)}
              className="flex items-center hover:bg-blue-100 dark:hover:bg-blue-100 pl-0.5 cursor-pointer dark:hover:bg-opacity-10 pr-3 rounded"
            >
              <MdAccountCircle className="text-5xl text-accent-900" />
              <div className="dark:text-white">
                <h3 className="text-lg">{auth.user?.last_name}</h3>
                {auth.user !== null && (
                  <h3 className="text-primary-dark -mt-1 text-sm">
                    {auth.user?.role_name}{" "}
                  </h3>
                )}
              </div>
            </div>
          ) : (
            <ul className="flex">
              <NavigationButton title="Home" to="/" exact />
              <NavigationButton title="Login" border to="/login" />
              <NavigationButton title="Register" border to="/register" />
            </ul>
          )}
        </div>
      </nav>

      {auth.isAuthenticated && Account && auth.user !== null && (
        <>
          <AccountModal
            auth={auth}
            setAccount={setAccount}
            Logout={() => {
              FC_Logout();
              setAccount(false);
            }}
          />
        </>
      )}
    </>
  );
};

const mapStateToProps = ({
  app,
  auth,
}: StoreState): { app: App; auth: Auth } => {
  return { app: app, auth: auth };
};

const RenderBuiltInComponent = connect(mapStateToProps, {
  FC_SideNav,
  FC_Logout,
})(_RenderBuiltInComponent);

export default RenderBuiltInComponent;
