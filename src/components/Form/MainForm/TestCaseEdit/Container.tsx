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
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class Container extends Component<any, ContainerProps> {
  state = {
    testCaseList: [],
    testCaseValue: "",
    testCaseGroupName: ""
  };

  componentWillReceiveProps(prop: any) {
    this.setState({
      testCaseGroupName: prop.testGroup.groupName,
      testCaseList: prop.testGroup.testCases
    });
  }

  componentDidMount() {
    if (this.props.testGroup && this.props.testGroup) {
      this.setState({
        testCaseGroupName: this.props.testGroup.groupName,
        testCaseList: this.props.testGroup.testCases
      });
    }
  }

  render() {
    const deleteTestCase = (id: any) => {
      let currentTestCaseList: any[] = this.state.testCaseList;
      if (id >= 0 && id <= currentTestCaseList.length) {
        currentTestCaseList.splice(id, 1);
        this.setState({
          testCaseList: currentTestCaseList
        });
      }
    };

    const setTestCaseGroupName = (e: any) => {
      let newTestCaseGroupName = e.target.value;
      this.setState({
        testCaseGroupName: newTestCaseGroupName
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
      this.state.testCaseList && this.state.testCaseList ? (
        this.state.testCaseList.map((testCase: any, index: number) => {
          return (
            <TestCaseItem
              deleteEvent={deleteTestCase}
              testId={index}
              key={index}
              testCaseName={testCase}
            />
          );
        })
      ) : (
        <Loader />
      );

    return (
      <StyledBox>
        <StyledContainer>
          <StyledFlex>
            <StyledFormTitle>Edit Group</StyledFormTitle>
            <StyledForm>
              <StyledInput
                type="text"
                required
                id="groupName"
                name="groupName"
                placeholder="Group name"
                value={this.state.testCaseGroupName}
                onChange={setTestCaseGroupName}
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

              <StyledSubmitButton>Edit Group</StyledSubmitButton>
            </StyledForm>
          </StyledFlex>
        </StyledContainer>
      </StyledBox>
    );
  }
}

const mapStateToProps = (state: any, ownProps: any) => {
  const id = ownProps.pageId;
  const testGroups =
    state.firestore.data.testGroups && state.firestore.data.testGroups;
  const testGroup = testGroups && testGroups ? testGroups[id] : null;
  return {
    testGroup: testGroup
  };
};

export default compose<any>(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "testGroups" }])
)(Container);

interface ContainerProps {
  testCaseList?: any;
  testCaseValue?: string;
  deleteEvent?: any;
  testCaseGroupName?: string;
}
