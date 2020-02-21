import styled from "styled-components";

export const StyledBox = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 160px;
`;

export const StyledContainer = styled.div`
  width: 55vw;
  background-color: #ffffff;
  box-shadow: 0px 3px 6px #00000029;
  opacity: 1;
  padding: 40px 40px;
  margin: 0 auto;
`;

export const StyledFlex = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const StyledFormTitle = styled.h2`
  font-size: 28px;
  text-align: center;
  color: #606060;
  opacity: 1;
  font-weight: 400;
  margin-top: 8px;
`;

export const StyledForm = styled.form`
  width: 55%;
  margin: 0 auto;
  height: 100%;
  margin-bottom: 26px;
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

export const StyledTextArea = styled.textarea`
  width: 100%;
  height: 140px;
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

export const StyledSelect = styled.select`
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
  margin-bottom: 20px;

  &:focus {
    font-size: 19px;
    transition: all 0.3s;
  }
`;

export const StyledCheckboxContainer = styled.div`
  width: 100%;
  max-height: 200px;
  overflow: auto;
`;

export const StyledCheckboxItemContainer = styled.div`
  width: 100%;
  margin-top: 13px;
`;

export const StyledCheckboxItem = styled.input`
  width: 20px;
  height: 16px;
`;

export const StyledLabelCheckbox = styled.span`
  width: 100%;
  color: #5b5b5b;
  opacity: 1;
  font-size: 17px;
  outline: none;
  font-weight: 400;
  margin-top: 20px;
  transition: all 0.3s;

  &:focus {
    font-size: 19px;
    transition: all 0.3s;
  }
`;

export const StyledOption = styled.option``;

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
`;

export const StyledItemBox = styled.div`
  width: 100%;
  padding: 6px;
  margin-top: 20px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const StyledAddedTest = styled.span`
  width: 100%;
  padding: 9px 7px 9px 15px;
  border-radius: 4px;
  margin-bottom: 10px;
  background-color: #ddd;
  display: flex;
`;

export const SyledAddedTestLabel = styled.span`
  font-size: 16px;
  display: flex;
  width: 75%;
  word-wrap: break-word;
`;

export const StyledTrashIconBox = styled.div`
  width: 25%;
  display: flex;
  justify-content: flex-end;
  background-color: #ddd;
`;
