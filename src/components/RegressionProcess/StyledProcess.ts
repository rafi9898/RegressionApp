import styled from "styled-components";

export const StyledBox = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 160px;
  text-align: center;

  @media (max-width: 700px) {
    padding-top: 100px;
    padding-bottom: 80px;
  }
`;

export const StyledSectionTitle = styled.span`
  font-size: 33px;
  text-align: center;
  color: #606060;
  opacity: 1;
  font-weight: 400;
  margin-top: 8px;
  margin-bottom: 54px;

  @media (max-width: 1100px) {
    font-size: 28px;
  }

  @media (max-width: 700px) {
    font-size: 22px;
  }
`;

export const StyledItemForm = styled.div`
  width: 80vw;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;

  @media (max-width: 1200px) {
    width: 80vw;
  }

  @media (max-width: 700px) {
    width: 90vw;
  }
`;

export const StyledItemContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  text-align: center;
  align-items: center;
  margin-bottom: 17px;
`;

export const StyledRowId = styled.div`
  width: 10%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ececec;
  border: 0.30000001192092896px solid #b8b2b2;
  opacity: 1;

  @media (max-width: 700px) {
    font-size: 14px;
  }
`;

export const StyledRowTitle = styled.div`
  width: 60%;
  background-color: #ececec;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.30000001192092896px solid #b8b2b2;
  opacity: 1;
  border-right: none;
  border-left: none;
`;

export const StyledRowStatus = styled.div`
  width: 17%;
  background-color: ${(p: ProcessProps) =>
    p.colorTestCase ? p.colorTestCase : "#ddd"};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  border: 0.30000001192092896px solid #b8b2b2;
  opacity: 1;

  @media (max-width: 700px) {
    width: 24%;
  }
`;

export const StyledLabel = styled.span`
  font-size: 20px;
  color: #2a2a2a;
  text-align: center;
  letter-spacing: 0.33px;
  opacity: 1;

  @media (max-width: 1100px) {
    font-size: 16px;
  }

  @media (max-width: 700px) {
    font-size: 13px;
  }
`;

export const StyledStatusLabel = styled.span`
  text-transform: uppercase;
  text-align: center;
  font-size: 20px;
  letter-spacing: 0.33px;
  color: #ffffff;
  opacity: 1;

  @media (max-width: 1100px) {
    font-size: 18px;
  }

  @media (max-width: 700px) {
    font-size: 13px;
  }
`;

export const StyledRowIcon = styled.div`
  width: 13%;
  display: flex;
  align-items: center;
  height: 40px;
  opacity: 1;

  @media (max-width: 700px) {
    width: 6%;
  }
`;

export const StyledVoteIcon = styled.img`
  width: 35px;
  cursor: pointer;
  margin-left: 15px;

  @media (max-width: 1100px) {
    width: 30px;
  }

  @media (max-width: 700px) {
    font-size: 26px;
  }
`;

export const StyledTimeLeftContainer = styled.div`
  position: fixed;
  width: 24%;
  left: 40px;
  bottom: 20px;
  display: flex;
  align-items: center;
`;

export const StyledTimeLabel = styled.span`
  font-size: 22px;
  display: flex;
  color: #141414;
  opacity: 1;
  margin-right: 20px;

  @media (max-width: 700px) {
    font-size: 16px;
  }
`;

export const StyledSaveButton = styled.button`
  min-width: 60%;
  text-align: center;
  letter-spacing: 0.23px;
  color: #ffffff;
  opacity: 1;
  font-weight: 400;
  box-shadow: 0px 3px 6px #00000029;
  opacity: 1;
  background-color: #32a564;
  padding: 7px 7px;
  outline: none;
  text-transform: uppercase;
  border: none;

  @media (max-width: 700px) {
    min-width: 43%;
    padding: 4px 7px;
  }
`;

export const StyledDoneButton = styled.button`
  width: 16%;
  padding: 16px 12px;
  outline: none;
  border: none;
  box-shadow: 0px 3px 6px #00000029;
  letter-spacing: 0.4px;
  color: #ffffff;
  opacity: 1;
  text-align: center;
  text-transform: uppercase;
  background-color: #454adf;
  position: fixed;
  right: 40px;
  bottom: 20px;

  @media (max-width: 1100px) {
    width: 12%;
  }

  @media (max-width: 700px) {
    width: 27%;
    padding: 8px 8px;
  }
`;

interface ProcessProps {
  colorTestCase?: string;
}
