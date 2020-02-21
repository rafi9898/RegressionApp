import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const StyledTableContainer = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
`;

export const StyledAddIcon = styled(Link)`
  width: 60px;
  height: 60px;
  box-shadow: 0px 3px 6px #00000029;
  opacity: 1;
  background-color: #4587df;
  border-radius: 7px;
  position: fixed;
  right: 40px;
  bottom: 20px;
  font-size: 40px;
  font-weight: bold;
  color: #fff;
  text-align: center;
  cursor: pointer;
  text-shadow: 0px 1px 1px #333;
  text-decoration: none;

  &:hover {
    text-decoration: none;
    color: #fff;
  }
`;

export const StyledActionLink = styled(Link)`
  cursor: pointer;
`;

export const StyledViewIcon = styled.img`
  width: 33px;
  cursor: pointer;
`;

export const StyledTrashIcon = styled.img`
  width: 45px;
  margin-right: 14px;
`;

export const StyledLabel = styled.span`
  font-size: 21px;
  letter-spacing: 0.09px;
  color: #1c1c1c;
  opacity: 1;
  font-weight: 400;
`;

export const StyledDelteContainer = styled.div`
  position: fixed;
  left: 40px;
  bottom: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;
