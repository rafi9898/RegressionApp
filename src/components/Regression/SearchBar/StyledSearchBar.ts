import styled from "styled-components";

export const StyledSearchBarContainer = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  margin: 0 auto;

  @media (max-width: 1100px) {
    width: 80%;
  }

  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const StyledSearchBar = styled.input`
  width: 100%;
  height: 50px;
  padding-left: 20px;
  border: 1px solid #707070;
  opacity: 1;
  font-size: 18px;
  color: #606060;
  outline: none;
  margin: 0 auto;

  @media (max-width: 1100px) {
    font-size: 17px;
  }

  @media (max-width: 700px) {
    font-size: 16px;
  }
`;
