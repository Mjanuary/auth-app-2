import React, { lazy, Suspense } from "react";
import { connect } from "react-redux";
import {
  Auth,
  FC_AddBasicInfo,
  FC_CheckUserIsAuthenticated,
  FT_AddBasicInfo,
  FT_CheckUserIsAuthenticated,
} from "./actions";
import { StoreState } from "./reducers";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProtectedRoute from "./components/PrivateRoute/PrivateRoute";

// Routes
import UserRegistration from "./containers/UserRegistration/UserRegistration";
import HomePage from "./containers/HomePage/HomePage";
import Navigation from "./components/Navigation/TopNavigation";
import SideNavigation from "./components/Navigation/SideNavigation";
import Dashboard from "./containers/Dashboard/Dashboard";
import LazyLoading from "./components/LazyLoading/LazyLoading";
import { APP_TOKEN_NAME } from "./config/app.config";
import LogoImage from "./assets/logo.jpg";
import Loading from "./components/Loading/Loading";
import DashboardContainer from "./components/DashboardContainer/DashboardContainer";
import Alert from "./components/Alert/Alert";

const Login = lazy(() =>
  import("./containers/Login/Login").then(({ Login }) => ({
    default: Login,
  }))
);

const ClientRequestForm = lazy(() =>
  import("./containers/ClientRequestForm/ClientRequestForm").then(
    ({ ClientRequestForm }) => ({
      default: UserRegistration,
    })
  )
);

const ProfilePage = lazy(() =>
  import("./containers/Profile/Profile").then(({ Profile }) => ({
    default: Profile,
  }))
);

// props for the component
interface AppProps {
  auth: Auth;
  FC_CheckUserIsAuthenticated: FT_CheckUserIsAuthenticated;
  FC_AddBasicInfo: FT_AddBasicInfo;
}

interface AppState {
  loading: boolean;
  error: string;
}

class _App extends React.Component<AppProps, AppState> {
  authenticationPath = "/login";
  constructor(props: AppProps) {
    super(props);

    this.state = {
      loading: false,
      error: "",
    };
  }

  componentDidMount() {
    if (localStorage[APP_TOKEN_NAME]) {
      this.setState({
        loading: true,
      });
      this.props.FC_CheckUserIsAuthenticated((auth_status, msg) => {
        if (auth_status) {
          this.setState({
            loading: false,
            error: "",
          });
        } else {
          console.log("Failed to login");
          this.setState({
            loading: false,
            error: "",
          });
        }
      });
    }
  }

  render() {
    if (this.state.loading === true) {
      return (
        <div className="h-screen w-full flex items-center">
          <div className="text-center mx-auto animate__animated animate__zoomIn animate__faster">
            <img
              alt="Reb logo"
              src={LogoImage}
              className="w-40 rounded mx-auto"
            />

            <div className="mt-14">
              <Loading />
            </div>
          </div>
        </div>
      );
    }

    if (this.state.error !== "")
      return (
        <DashboardContainer>
          <Alert theme="danger">{this.state.error}</Alert>
        </DashboardContainer>
      );

    return (
      <Router basename={"/congo"}>
        <Navigation />
        <SideNavigation />
        <div className="dark:bg-dark-900 min-h-screen lg:flex">
          {this.props.auth.isAuthenticated === true && (
            <div className="main-side-spacer"></div>
          )}
          <div className="flex-1 min-h-screen bg-primary-100 dark:bg-dark-900">
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/register" component={UserRegistration} />

              <Suspense fallback={<LazyLoading />}>
                <Route exact path={this.authenticationPath} component={Login} />

                <ProtectedRoute
                  path="/dashboard"
                  component={Dashboard}
                  isAuthenticated={this.props.auth.isAuthenticated}
                  authenticationPath={this.authenticationPath}
                  exact
                />

                <ProtectedRoute
                  path="/profile"
                  component={ProfilePage}
                  isAuthenticated={this.props.auth.isAuthenticated}
                  authenticationPath={this.authenticationPath}
                  exact
                />

                <ProtectedRoute
                  path="/request-form"
                  component={ClientRequestForm}
                  isAuthenticated={this.props.auth.isAuthenticated}
                  authenticationPath={this.authenticationPath}
                  exact
                />
              </Suspense>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = ({ auth }: StoreState): { auth: Auth } => {
  return { auth: auth };
};

export const App = connect(mapStateToProps, {
  FC_CheckUserIsAuthenticated,
  FC_AddBasicInfo,
})(_App);
