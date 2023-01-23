import React, { FC, ReactElement } from "react";
import { connect } from "react-redux";
import { Auth } from "../../actions/auth.action";
import { StoreState } from "../../reducers";
import { Basic } from "../../actions";

type HomePageProps = {
  auth: Auth;
  basic: Basic;
  headerSm?: boolean;
};

const _HomePage: FC<HomePageProps> = ({
  auth,
  basic,
  headerSm = false,
}): ReactElement => {
  return (
    <>
      <div className="w-full py-8 lg:py-10 bg-white dark:bg-black dark:bg-opacity-60 dark:text-white ">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2
              className={`${
                headerSm === false ? "text-2xl" : "text-4xl"
              }  text-center font-light text-primary-dark`}
            >
              Article <b>Janvier</b>
            </h2>
            <div className="mt-3 w-full px-6">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum
              odit iusto, tempore ad laborum repudiandae, fugiat quae rem
              possimus vel aperiam eligendi unde quia obcaecati excepturi
              mollitia qui explicabo dolores?
            </div>
          </div>
        </div>
      </div>
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
