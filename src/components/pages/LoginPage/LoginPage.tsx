import React from "react";
import { StyledContainer } from "./StyledLoginPage";
import LoginForm from "../../Form/LoginForm/LoginForm";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const LoginPage: React.SFC<LoginProps> = ({ auth }) => {
  if (auth.uid) return <Redirect to="/dashboard" />;
  return (
    <StyledContainer>
      <LoginForm />
    </StyledContainer>
  );
};

const mapStateToProps = (state: any) => {
  return {
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(LoginPage);

interface LoginProps {
  auth?: any;
}
