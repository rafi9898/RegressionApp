import React from "react";
import { StyledContainer } from "./StyledAddProjectPage";
import Container from "../../Form/MainForm/ProjectAdd/Container";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const AddProjectPage: React.SFC<ProjectProps> = ({ auth }) => {
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

export default connect(mapStateToProps)(AddProjectPage);

interface ProjectProps {
  auth?: any;
}
