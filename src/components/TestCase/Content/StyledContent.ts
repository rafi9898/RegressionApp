import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  flex-direction: row;
  margin-top: 30px;
`;

export const StyledMoreButton = styled.button`
  width: 40%;
  margin: 0 auto;
  margin-top: 27px;
  background: #4587df;
  box-shadow: 0px 3px 6px #00000029;
  height: 50px;
  padding: 10px 28px;
  text-align: center;
  font-weight: 400;
  color: #fff;
  opacity: 1;
  letter-spacing: 0.4px;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
  transition: all 0.3s;
  text-transform: uppercase;

  &:hover {
    background: #3b76c4;
    transition: all 0.3s;
  }
`;

export const StyledItemContainer = styled(Link)`
  width: 26%;
  min-height: 170px;
  box-shadow: 0px 3px 6px #00000029;
  opacity: 1;
  background: #fff;
  padding: 15px 8px;
  text-align: center;
  cursor: pointer;
  margin-bottom: 35px;
  text-decoration: none;

  &:hover {
    transition: all 0.3s;
    transform: scale(1.05);
    text-decoration: none;
  }
`;

export const StyledProjectIcon = styled.img`
  width: 53px;
  margin: 0 auto;
  margin-bottom: 20px;
`;

export const StyledItemTitle = styled.h4`
  font-size: 22px;
  color: #101010;
  opacity: 1;
  text-align: center;
  margin-bottom: 12px;
  font-weight: 400;
`;

export const StyledItemDesc = styled.p`
  font-size: 15px;
  text-align: center;
  color: #373737;
  opacity: 1;
  font-weight: 400;
`;
