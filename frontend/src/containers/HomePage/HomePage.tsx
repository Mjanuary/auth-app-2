import React, { FC, ReactElement } from "react";
import { connect } from "react-redux";
import { Auth } from "../../actions/auth.action";
import { StoreState } from "../../reducers";
import { Basic } from "../../actions";
// import { DATE } from "../../utils/functions";
// import { Link } from "react-router-dom";

type HomePageProps = {
  auth: Auth;
  basic: Basic;
};

const _HomePage: FC<HomePageProps> = ({ auth, basic }): ReactElement => {
  return (
    <>
      <div className="">janvier</div>
    </>
  );
};

const mapStateToProps = ({
  auth,
  basic,
}: StoreState): { auth: Auth; basic: Basic } => {
  return { auth: auth, basic: basic };
};

const HomePage = connect(mapStateToProps, {})(_HomePage);

export default HomePage;
