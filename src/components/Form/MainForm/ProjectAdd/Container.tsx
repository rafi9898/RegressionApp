import React, { Component } from "react";
import {
  StyledBox,
  StyledContainer,
  StyledFlex,
  StyledFormTitle,
  StyledForm,
  StyledInput,
  StyledSubmitButton,
  StyledTextArea
} from "../StyledForm";

class Container extends Component {
  render() {
    return (
      <StyledBox>
        <StyledContainer>
          <StyledFlex>
            <StyledFormTitle>Add Project</StyledFormTitle>
            <StyledForm>
              <StyledInput
                type="text"
                required
                id="projectName"
                name="projectName"
                placeholder="Project name"
              />

              <StyledTextArea
                id="projectDesc"
                name="projectDesc"
                placeholder="Project description"
                required
              />

              <StyledSubmitButton>Create project</StyledSubmitButton>
            </StyledForm>
          </StyledFlex>
        </StyledContainer>
      </StyledBox>
    );
  }
}

export default Container;
