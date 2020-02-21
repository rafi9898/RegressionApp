import React from "react";
import {
  StyledContainer,
  StyledSectionTitle,
  StyledSectionImg,
  StyledSubmitButton
} from "./StyledInfoBox";
import websiteIcon from "../../../assets/website.png";

const InfoBox = () => {
  return (
    <StyledContainer>
      <StyledSectionTitle>You don't have any project!</StyledSectionTitle>
      <StyledSectionImg src={websiteIcon} alt="website icon" />
      <StyledSubmitButton to="add-project">Create Project</StyledSubmitButton>
    </StyledContainer>
  );
};

export default InfoBox;
