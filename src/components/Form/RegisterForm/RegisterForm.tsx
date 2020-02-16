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
} from "../LoginForm/StyledLoginForm";
import userIcon from "../../../assets/User.svg";

const RegisterForm = () => {
  return (
    <StyledBox>
      <StyledContainer>
        <StyledFlex>
          <StyledUserIcon src={userIcon} alt="User icon" />
          <StyledFormTitle>Register now</StyledFormTitle>

          <StyledForm>
            <StyledInput type="email" placeholder="Email" required />
            <StyledInput type="text" placeholder="Login" required />
            <StyledInput type="password" placeholder="Password" required />
            <StyledInput
              type="password"
              placeholder="Repeat password"
              required
            />
            <StyledSubmitButton>Sign Up</StyledSubmitButton>
          </StyledForm>

          <StyledLabel to="/">
            Do you already have an account? Sign In!
          </StyledLabel>
        </StyledFlex>
      </StyledContainer>
    </StyledBox>
  );
};

export default RegisterForm;
