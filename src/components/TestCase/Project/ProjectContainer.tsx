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
import {
  deleteTestGroup,
  deleteTestGroupCollection
} from "../../../store/actions/testCaseActions";
import { deleteProject } from "../../../store/actions/projectActions";

class ProjectContainer extends Component<any, ProjectProps> {
  render() {
    const {
      testCases,
      match,
      deleteTestGroup,
      deleteProject,
      auth
    } = this.props;

    const deleteTestGroupAction = (groupId: string) => {
      let data = {
        idTestGroup: "",
        idItem: ""
      };

      if (groupId && match.params.id) {
        data.idTestGroup = match.params.id && match.params.id;
        data.idItem = groupId;
        deleteTestGroup(data);
      }
    };

    const deleteProjectAction = () => {
      const state = {
        projectId: match.params.id && match.params.id,
        authorId: auth.uid
      };
      if (state.projectId && state.authorId) {
        deleteProject(state);
      }
    };

    const renderTestCaseList =
      testCases && testCases
        ? testCases.reverse().map((testCase: any) => {
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
                      to={`/testcase-edit/${match.params.id}/${testCase.id}`}
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
                      onClick={() => deleteTestGroupAction(testCase.id)}
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

        <StyledAddIcon to={`/testcase-add/${match.params.id}`}>+</StyledAddIcon>

        <StyledDelteContainer onClick={deleteProjectAction}>
          <StyledTrashIcon src={trashIcon} alt="Trash icon" />
          <StyledLabel>Delete Project</StyledLabel>
        </StyledDelteContainer>
      </StyledContainer>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    testCases: state.firestore.ordered.testGroups,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    deleteTestGroup: (testGroup: any) => {
      dispatch(deleteTestGroup(testGroup));
    },
    deleteProject: (project: any) => {
      dispatch(deleteProject(project));
    },
    deleteTestGroupCollection: (testGroup: any) => {
      dispatch(deleteTestGroupCollection(testGroup));
    }
  };
};

export default compose<any>(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect((props: any) => {
    return [
      {
        collection: "testGroups",
        doc:
          props.match.params.id && props.match.params.id
            ? props.match.params.id
            : "null",
        subcollections: [{ collection: "testItems", orderBy: "createdAt" }],
        storeAs: `testGroups`
      }
    ];
  })
)(ProjectContainer);

interface ProjectProps {
  testCases?: any;
  match?: any;
  deleteTestGroup?: any;
  deleteProject?: any;
  auth?: any;
}
