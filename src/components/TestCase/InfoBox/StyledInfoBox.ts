import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const StyledSectionTitle = styled.h2`
  font-size: 33px;
  text-align: center;
  color: #606060;
  opacity: 1;
  font-weight: 400;
  margin-top: 8px;
  margin-bottom: 34px;
`;

export const StyledSectionImg = styled.img`
  width: 35%;
  margin: 0 auto;
  margin-bottom: 15px;
`;

export const StyledSubmitButton = styled.button`
  width: 60%;
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
