import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledNavbar = styled.nav`
  width: 100%;
  height: 80px;
  background-color: #4587df;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
`;

export const StyledFlex = styled.div`
  display: flex;
  padding: 0 40px;
  flex-direction: row;
  flex-wrap: wrap;
  height: 100%;
  align-items: center;
`;

export const StyledLogoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 50%;
`;

export const StyledUserItemContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 50%;
  align-items: center;
`;

export const StyledLogo = styled(Link)`
  color: #fbfbfb;
  font-size: 44px;
  letter-spacing: 0.2px;
  font-weight: bold;
  text-shadow: 0px 3px 6px #00000029;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    text-decoration: none;
    color: #fbfbfb;
  }
`;

export const StyledLogoutIcon = styled.img`
  width: 28px;
  cursor: pointer;
  margin-right: 12px;
`;

export const StyledUserIcon = styled.img`
  width: 50px;
  margin-right: 12px;
`;

export const StyledInitials = styled.span`
  text-transform: uppercase;
  color: #ffffff;
  letter-spacing: 0.44px;
  font-size: 26px;
`;
