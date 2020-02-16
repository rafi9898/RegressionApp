import React from "react";
import {
  StyledContainer,
  StyledFlex,
  StyledUserIcon,
  StyledBox,
  StyledFormTitle,
  StyledForm,
  StyledInput,
  StyledSubmitButton,
  StyledLabel
} from "./StyledLoginForm";
import userIcon from "../../../assets/User.svg";

const LoginForm = () => {
  return (
    <StyledBox>
      <StyledContainer>
        <StyledFlex>
          <StyledUserIcon src={userIcon} alt="User icon" />
          <StyledFormTitle>Log in to your account</StyledFormTitle>

          <StyledForm>
            <StyledInput type="email" placeholder="Email" required />
            <StyledInput type="password" placeholder="Password" required />
            <StyledSubmitButton>Sign In</StyledSubmitButton>
          </StyledForm>

          <StyledLabel>You do not have an account? Create now!</StyledLabel>
        </StyledFlex>
      </StyledContainer>
    </StyledBox>
  );
};

export default LoginForm;
