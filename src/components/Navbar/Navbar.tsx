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

const Navbar = () => {
  return (
    <StyledNavbar>
      <StyledFlex>
        <StyledLogoContainer>
          <StyledLogo to="/dashboard">REGAPP</StyledLogo>
        </StyledLogoContainer>

        <StyledUserItemContainer>
          <StyledLogoutIcon src={logoutIcon} alt="Logout icon" />
          <StyledUserIcon src={userIcon} alt="User icon" />
          <StyledInitials>RP</StyledInitials>
        </StyledUserItemContainer>
      </StyledFlex>
    </StyledNavbar>
  );
};

export default Navbar;
