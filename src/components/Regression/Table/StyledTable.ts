import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledTableContainer = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  text-align: center;

  @media (max-width: 1100px) {
    width: 80%;
  }

  @media (max-width: 700px) {
    width: 100%;
    font-size: 12px;
  }
`;

export const StyledViewIcon = styled.img`
  width: 23px;
  cursor: pointer;

  @media (max-width: 1100px) {
    width: 21px;
  }

  @media (max-width: 700px) {
    width: 19px;
  }
`;

export const StyledActionLink = styled(Link)`
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
`;
