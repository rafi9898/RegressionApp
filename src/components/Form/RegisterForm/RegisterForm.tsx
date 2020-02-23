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
} from "../LoginForm/StyledLoginForm";
import userIcon from "../../../assets/User.svg";
import { connect } from "react-redux";
import { signUp } from "../../../store/actions/authActions";

class RegisterForm extends Component<any, RegisterProps> {
  state = {
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    repeatPassword: "",
    incorrectPassword: false
  };

  render() {
    const { signUp, authError } = this.props;

    const setRegisterData = (e: any) => {
      const dataField = e.target.id;
      const dataValue = e.target.value;
      this.setState({
        [dataField]: dataValue
      });
    };

    const registerNewUser = (e: any) => {
      e.preventDefault();
      if (
        this.state.email &&
        this.state.firstName &&
        this.state.lastName &&
        this.state.password &&
        this.state.repeatPassword
      ) {
        if (this.state.password === this.state.repeatPassword) {
          this.setState({
            incorrectPassword: false
          });
          signUp(this.state);
        } else {
          this.setState({
            incorrectPassword: true
          });
        }
      }
    };

    return (
      <StyledBox>
        <StyledContainer>
          <StyledFlex>
            <StyledUserIcon src={userIcon} alt="User icon" />
            <StyledFormTitle>Register now</StyledFormTitle>

            <StyledForm onSubmit={registerNewUser}>
              <StyledInput
                onChange={setRegisterData}
                type="email"
                id="email"
                placeholder="Email"
                required
              />
              <StyledInput
                onChange={setRegisterData}
                type="text"
                id="firstName"
                placeholder="First name"
                required
              />
              <StyledInput
                onChange={setRegisterData}
                type="text"
                id="lastName"
                placeholder="Last name"
                required
              />
              <StyledInput
                onChange={setRegisterData}
                type="password"
                id="password"
                placeholder="Password"
                autoComplete="password"
                required
              />
              <StyledInput
                onChange={setRegisterData}
                autoComplete="repeat-password"
                type="password"
                id="repeatPassword"
                placeholder="Repeat password"
                required
              />
              <StyledSubmitButton>Sign Up</StyledSubmitButton>
            </StyledForm>

            <StyledErrorLabel>{authError ? authError : null}</StyledErrorLabel>

            <StyledErrorLabel>
              {this.state.incorrectPassword
                ? "Passwords are not the same!"
                : null}
            </StyledErrorLabel>

            <StyledLabel to="/">
              Do you already have an account? Sign In!
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
    signUp: (newUser: any) => dispatch(signUp(newUser))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);

interface RegisterProps {
  email?: string;
  firstName?: string;
  lastName?: string;
  password?: string;
  repeatPassword?: string;
  incorrectPassword?: boolean;
}
