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

class Container extends Component<{}, ContainerProps> {
  state = {
    testCaseList: ["1", "2", "3", "4"],
    testCaseValue: "",
    testCaseGroupName: "Jakas grupa"
  };

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

export default Container;

interface ContainerProps {
  testCaseList?: any;
  testCaseValue?: string;
  deleteEvent?: any;
  testCaseGroupName?: string;
}
