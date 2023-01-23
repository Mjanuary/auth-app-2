import React, { FC, ReactElement, useEffect, useState } from "react";
import { connect } from "react-redux";
import { FT_UpdateProfile, FC_UpdateProfile } from "../../actions";
import { Auth } from "../../actions/auth.action";
import Button from "../../components/Buttons/Button";
import DashboardContainer from "../../components/DashboardContainer/DashboardContainer";
import Heading from "../../components/Heading/Heading";
import TextInput from "../../components/Inputs/TextInput";
import { StoreState } from "../../reducers";

type ProfileProps = {
  auth: Auth;
  FC_UpdateProfile: FT_UpdateProfile;
};

interface defaultError {
  target: "email" | "first_name" | "last_name" | "middle_name" | "phone" | null;
  msg: string;
}
const defaultError: defaultError = {
  msg: "",
  target: null,
};

const _Profile: FC<ProfileProps> = ({
  auth,
  FC_UpdateProfile,
}): ReactElement => {
  const [email, setEmail] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [middle_name, setMiddleName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(defaultError);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setEmail(auth.user?.email || "");
    setFirstName(auth.user?.first_name || "");
    setLastName(auth.user?.last_name || "");
    setMiddleName(auth.user?.middle_name || "");
    setPhone(auth.user?.phone || "");
  }, [auth.user]);

  if (!auth.user)
    return <div className="p-4 text-center">No profile found!</div>;

  const submitProfile = (e: any) => {
    e.preventDefault();

    if (email.length <= 0) {
      setError({
        target: "email",
        msg: "Email is required",
      });
      clearError();
      return;
    }

    if (first_name.length <= 0) {
      setError({
        target: "first_name",
        msg: "First name is required",
      });
      clearError();
      return;
    }

    if (last_name.length <= 0) {
      setError({
        target: "last_name",
        msg: "Last name is required",
      });
      clearError();
      return;
    }

    if (phone.length <= 0) {
      setError({
        target: "phone",
        msg: "Phone number is required",
      });
      clearError();
      return;
    }

    setLoading(true);
    FC_UpdateProfile(
      {
        email,
        first_name,
        last_name,
        middle_name,
        phone,
      },
      (status, msg) => {
        if (status) {
          alert("Profile updated successfully!");
        } else {
          alert(`Error: ${msg}`);
        }

        setLoading(false);
      }
    );
  };

  const clearError = () =>
    setTimeout(() => {
      setError(defaultError);
    }, 2000);

  return (
    <DashboardContainer className="animate__animated animate__zoomIn ">
      <div className="pt-2">
        <Heading className="font-light p-3">Profile</Heading>
      </div>

      <div className="max-w-6xl">
        <form onSubmit={submitProfile}>
          <TextInput
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            error={error.target === "email" ? error.msg : ""}
            label={"Email"}
            placeholder={"example@email.com"}
            name={""}
            disabled={loading}
          />

          <TextInput
            onChange={(e) => setFirstName(e.target.value)}
            value={first_name}
            error={error.target === "first_name" ? error.msg : ""}
            label={"First name"}
            placeholder={"John"}
            name={""}
            disabled={loading}
          />

          <TextInput
            onChange={(e) => setMiddleName(e.target.value)}
            value={middle_name}
            error={error.target === "middle_name" ? error.msg : ""}
            label={"Middle name"}
            placeholder={""}
            name={""}
            disabled={loading}
          />

          <TextInput
            onChange={(e) => setLastName(e.target.value)}
            value={last_name}
            error={error.target === "last_name" ? error.msg : ""}
            label={"Last name"}
            placeholder={"Doe"}
            name={""}
            disabled={loading}
          />

          <TextInput
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            error={error.target === "phone" ? error.msg : ""}
            label={"Phone"}
            placeholder={"+2500000000"}
            name={""}
            disabled={loading}
          />

          <Button loading={loading}>Update profile</Button>
        </form>
      </div>
    </DashboardContainer>
  );
};

const mapStateToProps = ({ auth }: StoreState): { auth: Auth } => {
  return { auth: auth };
};

export const Profile = connect(mapStateToProps, { FC_UpdateProfile })(_Profile);
