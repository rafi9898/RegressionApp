import React, { Component } from "react";
import { StyledContainer, StyledMoreButton } from "./StyledContent";
import ProjectItem from "./ProjectItem";
import SearchBar from "./SearchBar/SearchBar";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import Loader from "../../Loader/Loader";

class Panel extends Component<any, PanelProps> {
  render() {
    const { projects } = this.props;
    const renderAllProjects =
      projects && projects
        ? projects.map((project: any) => {
            return (
              <ProjectItem
                key={project.id}
                idItem={project.id}
                link={`/testcase/${project.id}`}
                projectName={project.projectName}
                projectDesc={project.projectDesc}
              />
            );
          })
        : null;

    return (
      <React.Fragment>
        <SearchBar />
        <StyledContainer>
          {renderAllProjects ? renderAllProjects : <Loader />}
        </StyledContainer>
        <div style={{ textAlign: "center" }}>
          <StyledMoreButton>More</StyledMoreButton>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth
  };
};

export default compose<any>(
  connect(mapStateToProps),
  firestoreConnect((props: any) => {
    return [
      {
        collection: "projects",
        doc: props.auth.uid && props.auth.uid ? props.auth.uid : "null",
        subcollections: [{ collection: "projectItems", orderBy: "createdAt" }],
        storeAs: `projects`
      }
    ];
  })
)(Panel);

interface PanelProps {
  projects?: any;
  link?: string;
  idItem?: string;
}
