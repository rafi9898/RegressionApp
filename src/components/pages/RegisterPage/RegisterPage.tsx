import React from "react";
import { StyledContainer } from "./StyledRegisterPage";
import RegisterForm from "../../Form/RegisterForm/RegisterForm";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const RegisterPage: React.SFC<RegisterProps> = ({ auth }) => {
  if (auth.uid) return <Redirect to="/dashboard" />;
  return (
    <StyledContainer>
      <RegisterForm />
    </StyledContainer>
  );
};

const mapStateToProps = (state: any) => {
  return {
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(RegisterPage);

interface RegisterProps {
  auth?: any;
}
