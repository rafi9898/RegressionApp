import React, { Component } from "react";
import {
  StyledContainer,
  StyledFlex,
  StyledUserIcon,
  StyledBox,
  StyledFormTitle,
  StyledForm,
  StyledInput,
  StyledSubmitButton,
  StyledLabel,
  StyledErrorLabel
} from "./StyledLoginForm";
import userIcon from "../../../assets/User.svg";
import { connect } from "react-redux";
import { signIn } from "../../../store/actions/authActions";

class LoginForm extends Component<any, LoginFormProps> {
  state = {
    email: "",
    password: ""
  };

  render() {
    const { authError } = this.props;

    const setLoginData = (e: any) => {
      const userData = e.target.value;
      const userField = e.target.id;
      this.setState({
        [userField]: userData
      });
    };

    const handleSubmit = (e: any) => {
      e.preventDefault();
      if (this.state.email && this.state.password) {
        this.props.signIn(this.state);
      }
    };

    return (
      <StyledBox>
        <StyledContainer>
          <StyledFlex>
            <StyledUserIcon src={userIcon} alt="User icon" />
            <StyledFormTitle>Log in to your account</StyledFormTitle>

            <StyledForm onSubmit={handleSubmit}>
              <StyledInput
                onChange={setLoginData}
                id="email"
                type="email"
                placeholder="Email"
                required
              />
              <StyledInput
                onChange={setLoginData}
                id="password"
                type="password"
                placeholder="Password"
                required
              />
              <StyledSubmitButton>Sign In</StyledSubmitButton>
            </StyledForm>

            <StyledErrorLabel>{authError ? authError : null}</StyledErrorLabel>

            <StyledLabel to="/register">
              You do not have an account? Create now!
            </StyledLabel>
          </StyledFlex>
        </StyledContainer>
      </StyledBox>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    authError: state.auth.authError
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    signIn: (creds: any) => dispatch(signIn(creds))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

interface LoginFormProps {
  email?: string;
  password?: string;
}
