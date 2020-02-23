import React, { Component } from "react";
import {
  StyledBox,
  StyledContainer,
  StyledFlex,
  StyledFormTitle,
  StyledForm,
  StyledInput,
  StyledSubmitButton,
  StyledTextArea
} from "../StyledForm";
import { connect } from "react-redux";
import { createProject } from "../../../../store/actions/projectActions";

class Container extends Component<any, ProjectProps> {
  state = {
    projectName: "",
    projectDesc: ""
  };

  render() {
    const { createProjectWithData } = this.props;

    const setProjectData = (e: any) => {
      const dataField = e.target.id;
      const dataValue = e.target.value;
      this.setState({
        [dataField]: dataValue
      });
    };

    const createNewProject = (e: any) => {
      e.preventDefault();
      if (this.state.projectName && this.state.projectDesc) {
        createProjectWithData(this.state);
      }
    };

    return (
      <StyledBox>
        <StyledContainer>
          <StyledFlex>
            <StyledFormTitle>Add Project</StyledFormTitle>
            <StyledForm onSubmit={createNewProject}>
              <StyledInput
                type="text"
                required
                id="projectName"
                name="projectName"
                placeholder="Project name"
                onChange={setProjectData}
              />

              <StyledTextArea
                id="projectDesc"
                name="projectDesc"
                placeholder="Project description"
                onChange={setProjectData}
                required
              />

              <StyledSubmitButton>Create project</StyledSubmitButton>
            </StyledForm>
          </StyledFlex>
        </StyledContainer>
      </StyledBox>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    createProjectWithData: (project: any) => dispatch(createProject(project))
  };
};

export default connect(null, mapDispatchToProps)(Container);

interface ProjectProps {
  projectName?: string;
  projectDesc?: string;
}
