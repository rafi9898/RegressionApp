import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledBox = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 160px;

  @media (max-width: 700px) {
    padding-top: 100px;
    padding-bottom: 40px;
  }
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

  @media (max-width: 1100px) {
    width: 50px;
    height: 50px;
    font-size: 33px;
  }

  @media (max-width: 700px) {
    width: 40px;
    height: 40px;
    font-size: 24px;
    right: 20px;
  }
`;
