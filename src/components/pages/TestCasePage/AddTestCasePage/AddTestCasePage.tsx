import React from "react";
import { StyledContainer } from "./StyledAddTest";
import Container from "../../../Form/MainForm/TestCaseAdd/Container";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const AddTestCasePage: React.SFC<AddTestCaseProps> = ({ auth }) => {
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

export default connect(mapStateToProps)(AddTestCasePage);

interface AddTestCaseProps {
  auth?: any;
}
