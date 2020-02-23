import React, { Component } from "react";
import {
  StyledContainer,
  StyledTableContainer,
  StyledAddIcon,
  StyledTrashIcon,
  StyledLabel,
  StyledDelteContainer,
  StyledViewIcon,
  StyledActionLink
} from "./StyledProject";
import SearchBar from "./SearchBar/SearchBar";
import { Table as TableBootstrap } from "react-bootstrap";
import trashIcon from "../../../assets/Trash.svg";
import editIcon from "../../../assets/EditCase.svg";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class ProjectContainer extends Component<ProjectProps> {
  render() {
    const { testCases } = this.props;

    const renderTestCaseList =
      testCases && testCases
        ? testCases.map((testCase: any) => {
            return (
              <tbody key={testCase.id}>
                <tr>
                  <td>
                    {testCase.groupName.length <= 54
                      ? testCase.groupName
                      : testCase.groupName.slice(0, 54) + "..."}
                  </td>
                  <td>{testCase.testCases.length}</td>
                  <td>
                    <StyledActionLink
                      id={testCase.id}
                      to={`/testcase-edit/${testCase.id}`}
                    >
                      <StyledViewIcon src={editIcon} alt="Edit icon" />
                    </StyledActionLink>
                  </td>
                  <td>
                    <StyledViewIcon
                      id={testCase.id}
                      style={{ width: "29px" }}
                      src={trashIcon}
                      alt="Delete icon"
                    />
                  </td>
                </tr>
              </tbody>
            );
          })
        : null;

    return (
      <StyledContainer>
        <SearchBar />
        <StyledTableContainer>
          <TableBootstrap striped bordered hover>
            <thead>
              <tr>
                <th>Component</th>
                <th>Number of test case</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>

            {renderTestCaseList && renderTestCaseList
              ? renderTestCaseList
              : null}
          </TableBootstrap>
        </StyledTableContainer>

        <StyledAddIcon to="/testcase-add">+</StyledAddIcon>

        <StyledDelteContainer>
          <StyledTrashIcon src={trashIcon} alt="Trash icon" />
          <StyledLabel>Delete Project</StyledLabel>
        </StyledDelteContainer>
      </StyledContainer>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    testCases: state.firestore.ordered.testGroups
  };
};

export default compose<any>(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "testGroups", orderBy: [["createdAt", "desc"]] }
  ])
)(ProjectContainer);

interface ProjectProps {
  testCases?: any;
}
