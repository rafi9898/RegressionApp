import React from "react";
import { StyledContainer } from "./StyledProcessPage";
import Container from "../../../RegressionProcess/Container";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const ProcessPage: React.SFC<ProcessProps> = ({ auth, match }) => {
  if (!auth.uid) return <Redirect to="/" />;
  return (
    <StyledContainer>
      <Container match={match} />
    </StyledContainer>
  );
};

const mapStateToProps = (state: any) => {
  return {
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(ProcessPage);

interface ProcessProps {
  auth?: any;
  match?: any;
}
