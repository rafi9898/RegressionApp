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
import { updateTestGroup } from "../../../../store/actions/testCaseActions";

class Container extends Component<any, ContainerProps> {
  state = {
    testCaseList: [],
    testCaseValue: "",
    testCaseGroupName: "",
    projectId: "",
    testItemId: ""
  };

  componentWillReceiveProps(prop: any) {
    if (prop.testGroup.groupName) {
      this.setState({
        testCaseGroupName: prop.testGroup.groupName,
        testCaseList: prop.testGroup.testCases,
        projectId: prop.projectId,
        testItemId: prop.pageId
      });
    }
  }

  render() {
    const { updateTestGroup } = this.props;

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
      const newTestCaseGroupName = e.target.value;
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

    const updateNewTestGroup = (e: any) => {
      e.preventDefault();
      if (
        this.state.testCaseGroupName &&
        this.state.testCaseList &&
        this.state.testItemId &&
        this.state.projectId
      ) {
        updateTestGroup(this.state);
      }
    };

    return (
      <StyledBox>
        <StyledContainer>
          <StyledFlex>
            <StyledFormTitle>Edit Group</StyledFormTitle>
            <StyledForm onSubmit={updateNewTestGroup}>
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
                {this.state.testCaseList &&
                this.state.testCaseList.length > 0 ? (
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
  const testGroup =
    state.firestore.data.testGroups && state.firestore.data.testGroups;
  return {
    testGroup: testGroup
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    updateTestGroup: (testGroup: any) => {
      dispatch(updateTestGroup(testGroup));
    }
  };
};

export default compose<any>(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect((props: any) => {
    return [
      {
        collection: "testGroups",
        doc: props.projectId && props.projectId ? props.projectId : "null",
        subcollections: [
          {
            collection: "testItems",
            doc: props.pageId && props.pageId ? props.pageId : "null"
          }
        ],
        storeAs: `testGroups`
      }
    ];
  })
)(Container);

interface ContainerProps {
  testCaseList?: any;
  testCaseValue?: string;
  deleteEvent?: any;
  testCaseGroupName?: string;
  projectId?: string;
  testItemId?: string;
}
