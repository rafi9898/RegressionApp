import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledBox = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 160px;
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
  text-decoration: none;
  text-shadow: 0px 1px 1px #333;

  &:hover {
    text-decoration: none;
    color: #fff;
  }
`;
