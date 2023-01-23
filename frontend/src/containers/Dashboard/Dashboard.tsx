import React, { FC, ReactElement } from "react";
import { connect } from "react-redux";
import { Auth } from "../../actions/auth.action";
import DashboardContainer from "../../components/DashboardContainer/DashboardContainer";
import Heading from "../../components/Heading/Heading";
import { StoreState } from "../../reducers";

type DashboardProps = {
  auth: Auth;
};

const _Dashboard: FC<DashboardProps> = ({ auth }): ReactElement => {
  if (!auth.user)
    return <div className="p-4 text-center">No profile found!</div>;

  return (
    <DashboardContainer className="animate__animated animate__zoomIn ">
      <div className="pt-2">
        <Heading className="text-center font-light p-3">
          Welcome <b>{auth.user.first_name}</b>
        </Heading>
      </div>

      <div className="animate__animated animate__fadeIn border mb-2 rounded"></div>
    </DashboardContainer>
  );
};

const mapStateToProps = ({ auth }: StoreState): { auth: Auth } => {
  return { auth: auth };
};

const Dashboard = connect(mapStateToProps, {})(_Dashboard);

export default Dashboard;
