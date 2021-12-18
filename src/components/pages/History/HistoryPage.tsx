import React from "react";
import { StyledContainer } from "./StyledContainer";
import Container from "../../History/Container";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const HistoryPage: React.SFC<HistoryProps> = ({ auth }) => {
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

export default connect(mapStateToProps)(HistoryPage);

interface HistoryProps {
  auth?: any;
}
