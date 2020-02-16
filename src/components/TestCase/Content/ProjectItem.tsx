import React, { Component } from "react";
import {
  StyledItemContainer,
  StyledProjectIcon,
  StyledItemTitle,
  StyledItemDesc
} from "./StyledContent";
import projectIcon from "../../../assets/ProjectTestCase.svg";

export class ProjectItem extends Component<ProjectItemProps> {
  render() {
    const { itemTitle, desc, link } = this.props;

    return (
      <StyledItemContainer to={link}>
        <StyledProjectIcon src={projectIcon} alt="project icon" />
        <StyledItemTitle>{itemTitle}</StyledItemTitle>
        <StyledItemDesc>{desc}</StyledItemDesc>
      </StyledItemContainer>
    );
  }
}

export default ProjectItem;

interface ProjectItemProps {
  itemTitle?: string;
  desc?: string;
  link?: string;
}
