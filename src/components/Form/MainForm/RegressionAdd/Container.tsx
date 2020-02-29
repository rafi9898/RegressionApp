import React, { Component } from "react";
import {
  StyledBox,
  StyledContainer,
  StyledFlex,
  StyledFormTitle,
  StyledForm,
  StyledInput,
  StyledSubmitButton,
  StyledSelect,
  StyledOption,
  StyledCheckboxContainer
} from "../StyledForm";
import Loader from "../../../Loader/Loader";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import TestCasesItem from "./TestCasesItem";
import { createRegression } from "../../../../store/actions/regressionActions";

class Container extends Component<ContainerProps> {
  state = {
    regressionTitle: "",
    regressionProject: "",
    regressionProjectName: "",
    choosedTestCases: [],
    statusChoosedTestCases: [],
    validation: true,
    allTestCases: null
  };

  render() {
    const { projects, createNewRegression }: any = this.props;

    const setRegressionData = (e: any) => {
      if (e.target.id === "regressionProject") {
        this.setState({
          regressionProject: e.target.id,
          choosedTestCases: [],
          statusChoosedTestCases: [],
          allTestCases: null
        });
      }
      this.setState({
        [e.target.id]: e.target.value
      });
    };

    const setRegressionTestCases = (e: any, testList: any) => {
      let currentTestCaseList: any = this.state.choosedTestCases;

      if (e.target.checked) {
        let currentStatusTestCaseList: number[] = [];
        currentTestCaseList.push(testList);
        const listCases = [].concat.apply([], currentTestCaseList);
        for (let i = 0; i < listCases.length; i++) {
          currentStatusTestCaseList.push(0);
        }
        this.setState({
          choosedTestCases: currentTestCaseList,
          statusChoosedTestCases: currentStatusTestCaseList,
          allTestCases: listCases
        });
      } else {
        const index = currentTestCaseList.indexOf(testList);
        if (index > -1) {
          let currentStatusTestCaseList: number[] = [];
          currentTestCaseList.splice(index, 1);
          const listCases = [].concat.apply([], currentTestCaseList);
          for (let i = 0; i < listCases.length; i++) {
            currentStatusTestCaseList.push(0);
          }
          this.setState({
            choosedTestCases: currentTestCaseList,
            statusChoosedTestCases: currentStatusTestCaseList,
            allTestCases: listCases
          });
        }
      }
    };

    const addNewRegression = (e: any) => {
      e.preventDefault();
      if (
        this.state.regressionTitle &&
        this.state.regressionProject &&
        this.state.statusChoosedTestCases &&
        this.state.regressionProjectName &&
        this.state.allTestCases &&
        this.state.choosedTestCases.length
      ) {
        createNewRegression(this.state);
      } else {
        this.setState({
          validation: false
        });
      }
    };

    const renderProjectOptions =
      projects && projects
        ? projects.map((project: any) => {
            return (
              <StyledOption key={project.id} value={project.id}>
                {project.projectName}
              </StyledOption>
            );
          })
        : null;

    return (
      <StyledBox>
        <StyledContainer>
          <StyledFlex>
            <StyledFormTitle>Add New Regression</StyledFormTitle>

            <StyledForm onSubmit={addNewRegression}>
              <StyledInput
                type="text"
                required
                id="regressionTitle"
                placeholder="Regression name / ID"
                onChange={setRegressionData}
              />

              <StyledInput
                type="text"
                required
                id="regressionProjectName"
                placeholder="Project name"
                onChange={setRegressionData}
              />

              <StyledSelect
                defaultValue={"DEFAULT"}
                id="regressionProject"
                onChange={setRegressionData}
                required
                style={{
                  borderBottom: this.state.validation
                    ? "0.5px solid #707070"
                    : "0.5px solid crimson"
                }}
              >
                <StyledOption value="DEFAULT" disabled>
                  Select your project
                </StyledOption>
                {renderProjectOptions && renderProjectOptions ? (
                  renderProjectOptions
                ) : (
                  <Loader />
                )}
              </StyledSelect>

              <StyledCheckboxContainer>
                <TestCasesItem
                  projectId={this.state.regressionProject}
                  setTestCaseAction={setRegressionTestCases}
                />
              </StyledCheckboxContainer>

              <StyledSubmitButton>Add Regression</StyledSubmitButton>
            </StyledForm>
          </StyledFlex>
        </StyledContainer>
      </StyledBox>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth,
    testGroups: state.firestore.ordered.testGroups
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    createNewRegression: (regression: any) =>
      dispatch(createRegression(regression))
  };
};

export default compose<any>(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect((props: any) => {
    return [
      {
        collection: "projects",
        doc: props.auth.uid && props.auth.uid ? props.auth.uid : "null",
        subcollections: [{ collection: "projectItems", orderBy: "createdAt" }],
        storeAs: `projects`
      },
      {
        collection: "testGroups"
      }
    ];
  })
)(Container);

interface ContainerProps {
  regressionTitle?: string;
  regressionProject?: string;
  choosedTestCases?: any;
  validation?: boolean;
  htmlFor?: string;
  allTestCases?: any;
  projects?: any;
  regressionProjectOptions?: any;
  testCases?: any;
  regressionProjectName?: string;
  onSelect?: any;
}
