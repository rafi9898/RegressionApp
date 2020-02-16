import React from "react";
import { StyledContainer } from "./StyledLoginPage";
import Navbar from "../../Navbar/Navbar";
import LoginForm from "../../Form/LoginForm/LoginForm";

const LoginPage = () => {
  return (
    <StyledContainer>
      <Navbar />
      <LoginForm />
    </StyledContainer>
  );
};

export default LoginPage;
