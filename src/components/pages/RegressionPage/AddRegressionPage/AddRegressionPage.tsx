import React from "react";
import { StyledContainer } from "./StyledAddRegression";
import Container from "../../../Form/MainForm/RegressionAdd/Container";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const AddRegressionPage: React.SFC<AddRegressionProps> = ({ auth }) => {
  if (!auth.uid) return <Redirect to="/" />;
  return (
    <StyledContainer>
      <Container />
    </StyledContainer>
  );
};

const mapStateToProps = (state: any) => {
  return {
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(AddRegressionPage);

interface AddRegressionProps {
  auth?: any;
}
