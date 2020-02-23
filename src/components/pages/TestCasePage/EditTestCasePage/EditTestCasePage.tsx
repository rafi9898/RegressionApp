import React from "react";
import { StyledContainer } from "./StyledEditTest";
import Container from "../../../Form/MainForm/TestCaseEdit/Container";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const EditTestCasePage = (props: any) => {
  if (!props.auth.uid) return <Redirect to="/" />;
  return (
    <StyledContainer>
      <Container pageId={props.match.params.id} />
    </StyledContainer>
  );
};

const mapStateToProps = (state: any) => {
  return {
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(EditTestCasePage);
