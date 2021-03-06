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

export const StyledContainer = styled.div`
  width: 55vw;
  background-color: #ffffff;
  box-shadow: 0px 3px 6px #00000029;
  opacity: 1;
  padding: 40px 40px;
  margin: 0 auto;

  @media (max-width: 1100px) {
    width: 80vw;
  }

  @media (max-width: 700px) {
    width: 95vw;
  }
`;

export const StyledFlex = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const StyledUserIcon = styled.img`
  width: 69px;
  margin: 0 auto;

  @media (max-width: 1100px) {
    width: 49px;
  }
`;

export const StyledFormTitle = styled.h2`
  font-size: 28px;
  text-align: center;
  color: #606060;
  opacity: 1;
  font-weight: 400;
  margin-top: 8px;

  @media (max-width: 1100px) {
    font-size: 23px;
  }
`;

export const StyledForm = styled.form`
  width: 55%;
  margin: 0 auto;
  height: 100%;
  margin-bottom: 26px;

  @media (max-width: 1100px) {
    width: 75%;
  }

  @media (max-width: 700px) {
    width: 90%;
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 36px;
  color: #5b5b5b;
  opacity: 1;
  font-size: 17px;
  outline: none;
  font-weight: 400;
  border: none;
  border-bottom: 0.5px solid #707070;
  margin-top: 20px;
  transition: all 0.3s;

  &:focus {
    font-size: 19px;
    transition: all 0.3s;
  }
`;

export const StyledSubmitButton = styled.button`
  width: 100%;
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

  &:hover {
    background: #3b76c4;
    transition: all 0.3s;
  }

  @media (max-width: 1100px) {
    font-size: 16px;
    height: 45px;
  }
`;

export const StyledDivider = styled.div`
  width: 100%;
  border-bottom: 0.5px solid #707070;
  padding: 10px 0px;
`;

export const StyledErrorLabel = styled.span`
  font-size: 18px;
  text-align: center;
  letter-spacing: 0.35px;
  color: crimson;
  opacity: 1;
  cursor: pointer;
  text-decoration: none;

  @media (max-width: 1100px) {
    font-size: 16px;
  }
`;

export const StyledLabel = styled(Link)`
  font-size: 19px;
  text-align: center;
  letter-spacing: 0.35px;
  color: #2d2d2d;
  opacity: 1;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    text-decoration: none;
    color: #2d2d2d;
  }

  @media (max-width: 1100px) {
    font-size: 16px;
  }
`;
