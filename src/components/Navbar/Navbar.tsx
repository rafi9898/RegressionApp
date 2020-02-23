import React from "react";
import {
  StyledNavbar,
  StyledFlex,
  StyledLogoContainer,
  StyledUserItemContainer,
  StyledLogo,
  StyledLogoutIcon,
  StyledUserIcon,
  StyledInitials
} from "./StyledNavbar";
import logoutIcon from "../../assets/Logout.svg";
import userIcon from "../../assets/User.svg";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";

const Navbar: React.SFC<NavbarProps> = ({ signOut, auth }) => {
  const links = auth.uid ? (
    <StyledUserItemContainer>
      <StyledLogoutIcon onClick={signOut} src={logoutIcon} alt="Logout icon" />
      <StyledUserIcon src={userIcon} alt="User icon" />
      <StyledInitials>RP</StyledInitials>
    </StyledUserItemContainer>
  ) : null;

  return (
    <StyledNavbar>
      <StyledFlex>
        <StyledLogoContainer>
          <StyledLogo to="/dashboard">REGAPP</StyledLogo>
        </StyledLogoContainer>

        {links ? links : null}
      </StyledFlex>
    </StyledNavbar>
  );
};

const mapStateToProps = (state: any) => {
  return {
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

interface NavbarProps {
  signOut?: any;
  auth?: any;
}
