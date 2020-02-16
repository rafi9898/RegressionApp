import React from "react";
import {
  StyledContainer,
  StyledTableContainer,
  StyledAddIcon,
  StyledTrashIcon,
  StyledLabel,
  StyledDelteContainer,
  StyledViewIcon
} from "./StyledProject";
import SearchBar from "./SearchBar/SearchBar";
import { Table as TableBootstrap } from "react-bootstrap";
import trashIcon from "../../../assets/Trash.svg";
import editIcon from "../../../assets/EditCase.svg";

const ProjectContainer = () => {
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
          <tbody>
            <tr>
              <td>Wyszukiwarka</td>
              <td>13</td>
              <td>
                <StyledViewIcon src={editIcon} alt="Edit icon" />
              </td>
              <td>
                <StyledViewIcon
                  style={{ width: "29px" }}
                  src={trashIcon}
                  alt="Edit icon"
                />
              </td>
            </tr>
            <tr>
              <td>Wyszukiwarka</td>
              <td>13</td>
              <td>
                <StyledViewIcon src={editIcon} alt="Edit icon" />
              </td>
              <td>
                <StyledViewIcon
                  style={{ width: "29px" }}
                  src={trashIcon}
                  alt="Edit icon"
                />
              </td>
            </tr>
            <tr>
              <td>Wyszukiwarka</td>
              <td>13</td>
              <td>
                <StyledViewIcon src={editIcon} alt="Edit icon" />
              </td>
              <td>
                <StyledViewIcon
                  style={{ width: "29px" }}
                  src={trashIcon}
                  alt="Edit icon"
                />
              </td>
            </tr>
          </tbody>
        </TableBootstrap>
      </StyledTableContainer>

      <StyledAddIcon>+</StyledAddIcon>

      <StyledDelteContainer>
        <StyledTrashIcon src={trashIcon} alt="Trash icon" />
        <StyledLabel>Delete Project</StyledLabel>
      </StyledDelteContainer>
    </StyledContainer>
  );
};

export default ProjectContainer;
