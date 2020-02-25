import React, { Component } from "react";
import {
  StyledBox,
  StyledContainer,
  StyledFlex,
  StyledFormTitle,
  StyledForm,
  StyledInput,
  StyledSubmitButton,
  StyledItemBox
} from "../StyledForm";
import Loader from "../../../Loader/Loader";
import TestCaseItem from "./TestCaseItem";
import { connect } from "react-redux";
import { createTestGroup } from "../../../../store/actions/testCaseActions";

class Container extends Component<any, ContainerProps> {
  state = {
    testGroupName: "",
    testCaseList: [],
    testCaseValue: "",
    projectId: ""
  };

  componentDidMount() {
    const projectId = this.props.match.params.id && this.props.match.params.id;
    this.setState({
      projectId: projectId
    });
  }

  componentWillReceiveProps(ownProps: any) {
    const projectId = ownProps.match.paramas.id && ownProps.match.paramas.id;
    this.setState({
      projectId: projectId
    });
  }

  render() {
    const deleteTestCase = (id: any) => {
      let currentTestCaseList: any[] = this.state.testCaseList;
      const index = currentTestCaseList.indexOf(id);
      if (index > -1) {
        currentTestCaseList.splice(index, 1);
        this.setState({
          testCaseList: currentTestCaseList
        });
      }
    };

    const setGroupName = (e: any) => {
      let currentGroupName = e.target.value;
      this.setState({
        testGroupName: currentGroupName
      });
    };

    const addNewTestCase = (e: any) => {
      this.setState({
        testCaseValue: e.target.value
      });

      if (e.keyCode === 13) {
        e.preventDefault();
        const testCaseValue = e.target.value;
        let currentTestCaseList: any[] = this.state.testCaseList;
        if (testCaseValue) {
          currentTestCaseList.push(testCaseValue);
          this.setState({
            testCaseList: currentTestCaseList,
            testCaseValue: ""
          });
        }
      }
    };

    const showTestCaseList =
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      this.state.testCaseList ? (
        this.state.testCaseList.map((testCase, index) => {
          return (
            <TestCaseItem
              deleteEvent={deleteTestCase}
              testId={testCase}
              key={index}
              testCaseName={testCase}
            />
          );
        })
      ) : (
        <Loader />
      );

    const createNewTestGroup = (e: any) => {
      e.preventDefault();
      if (this.state.testGroupName && this.state.testCaseList.length >= 1) {
        this.props.createTestGroup(this.state);
      }
    };

    return (
      <StyledBox>
        <StyledContainer>
          <StyledFlex>
            <StyledFormTitle>Add Group</StyledFormTitle>
            <StyledForm onSubmit={createNewTestGroup}>
              <StyledInput
                type="text"
                required
                id="groupName"
                name="groupName"
                placeholder="Group name"
                onChange={setGroupName}
              />

              <StyledInput
                type="text"
                id="testCase"
                name="testCase"
                placeholder="Test case"
                value={this.state.testCaseValue}
                onKeyDown={addNewTestCase}
                onChange={addNewTestCase}
              />

              <StyledItemBox>
                {this.state.testCaseList.length > 0 ? (
                  showTestCaseList
                ) : (
                  <Loader />
                )}
              </StyledItemBox>

              <StyledSubmitButton onClick={createNewTestGroup}>
                Create Group
              </StyledSubmitButton>
            </StyledForm>
          </StyledFlex>
        </StyledContainer>
      </StyledBox>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    createTestGroup: (testGroup: any) => {
      dispatch(createTestGroup(testGroup));
    }
  };
};

export default connect(null, mapDispatchToProps)(Container);

interface ContainerProps {
  testCaseList?: any;
  testCaseValue?: string;
  deleteEvent?: any;
  testGroupName?: string;
  projectId?: string;
}
