import React from "react";
import { StyledContainer } from "./StyledTestCase";
import Container from "../../TestCase/Container/Container";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const TestCasePage: React.SFC<TestCaseProps> = ({ auth }) => {
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

export default connect(mapStateToProps)(TestCasePage);

interface TestCaseProps {
  auth?: any;
}
