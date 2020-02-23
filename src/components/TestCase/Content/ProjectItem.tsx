import React, { Component } from "react";
import {
  StyledItemContainer,
  StyledProjectIcon,
  StyledItemTitle,
  StyledItemDesc
} from "./StyledContent";
import projectIcon from "../../../assets/ProjectTestCase.svg";

export class ProjectItem extends Component<any, ProjectItemProps> {
  render() {
    const { idItem, link, projectName, projectDesc } = this.props;

    return (
      <StyledItemContainer key={idItem} to={link}>
        <StyledProjectIcon src={projectIcon} alt="project icon" />
        <StyledItemTitle>{projectName}</StyledItemTitle>
        <StyledItemDesc>
          {projectDesc.length <= 120
            ? projectDesc
            : projectDesc.slice(0, 120) + "..."}
        </StyledItemDesc>
      </StyledItemContainer>
    );
  }
}

export default ProjectItem;

interface ProjectItemProps {
  projectData?: any;
  link?: string;
  projectName?: string;
  projectDesc?: any;
  idItem?: string;
}
