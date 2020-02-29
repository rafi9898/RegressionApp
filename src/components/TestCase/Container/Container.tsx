import React, { Component } from "react";
import { StyledBox } from "./StyledContainer";
import InfoBox from "../InfoBox/InfoBox";
import Panel from "../Content/Panel";
import Loader from "../../Loader/Loader";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

export class Container extends Component<any, ContainerState> {
  state = {
    isProject: true
  };

  componentWillReceiveProps(ownProps: any) {
    if (ownProps.projects && ownProps.projects.length > 0) {
      this.setState({
        isProject: true
      });
    } else {
      this.setState({
        isProject: false
      });
    }
  }

  render() {
    const renderOption =
      this.state.isProject && this.state.isProject ? <Panel /> : <InfoBox />;
    return <StyledBox>{renderOption ? renderOption : <Loader />}</StyledBox>;
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
)(Container);

interface ContainerState {
  isProject?: boolean;
  projects?: any;
}
