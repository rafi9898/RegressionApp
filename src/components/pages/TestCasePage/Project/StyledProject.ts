import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 60%;
  height: 100%;
  padding-top: 160px;
  margin: 0 auto;

  @media (max-width: 1100px) {
    width: 80%;
  }

  @media (max-width: 700px) {
    width: 95%;
    padding-top: 100px;
    padding-bottom: 80px;
  }
`;
