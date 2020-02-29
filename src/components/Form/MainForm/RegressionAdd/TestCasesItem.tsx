import React, { Component } from "react";
import {
  StyledCheckboxItem,
  StyledLabelCheckbox,
  StyledCheckboxItemContainer
} from "../StyledForm";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import Loader from "../../../Loader/Loader";

class TestCasesItem extends Component<TestCaseProps> {
  render() {
    const { testGroups, setTestCaseAction } = this.props;

    const setRegressionTestCases = (e: any, testList: any) => {
      setTestCaseAction(e, testList);
    };

    const renderTestCases =
      testGroups && testGroups ? (
        testGroups.map((testCases: any, id: any) => {
          return (
            <StyledCheckboxItemContainer key={id}>
              <StyledCheckboxItem
                type="checkbox"
                id={id}
                value={testCases.groupName}
                name={testCases.groupName}
                onChange={(e: any) =>
                  setRegressionTestCases(e, testCases.testCases)
                }
                defaultChecked={false}
              />
              <StyledLabelCheckbox
                htmlFor={testCases.groupName}
                {...this.props}
              >
                {testCases.groupName}
              </StyledLabelCheckbox>
            </StyledCheckboxItemContainer>
          );
        })
      ) : (
        <Loader />
      );

    return (
      <React.Fragment>
        {renderTestCases && renderTestCases.length > 0 ? (
          renderTestCases
        ) : (
          <Loader />
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    testGroups: state.firestore.ordered.testGroups
  };
};

export default compose<any>(
  connect(mapStateToProps),
  firestoreConnect((props: any) => {
    return [
      {
        collection: "testGroups",
        doc: props.projectId && props.projectId ? props.projectId : "null",
        subcollections: [{ collection: "testItems", orderBy: "createdAt" }],
        storeAs: `testGroups`
      }
    ];
  })
)(TestCasesItem);

interface TestCaseProps {
  projectId?: string;
  htmlFor?: string;
  testGroups?: any;
  setTestCaseAction?: any;
  testItems?: any;
}
