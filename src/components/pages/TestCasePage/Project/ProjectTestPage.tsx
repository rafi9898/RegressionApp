import React from "react";
import { StyledContainer } from "./StyledProject";
import ProjectContainer from "../../../TestCase/Project/ProjectContainer";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const ProjectTestPage: React.SFC<ProjectTestProps> = ({ auth, match }) => {
  if (!auth.uid) return <Redirect to="/" />;
  return (
    <StyledContainer>
      <ProjectContainer match={match} />
    </StyledContainer>
  );
};

const mapStateToProps = (state: any) => {
  return {
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(ProjectTestPage);

interface ProjectTestProps {
  auth?: any;
  match?: any;
}
