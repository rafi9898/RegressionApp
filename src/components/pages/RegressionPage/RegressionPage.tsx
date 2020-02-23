import React from "react";
import { StyledContainer } from "./StyledRegressionPage";
import Container from "../../Regression/Container/Container";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const RegressionPage: React.SFC<RegressionProps> = ({ auth }) => {
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

export default connect(mapStateToProps)(RegressionPage);

interface RegressionProps {
  auth?: any;
}
