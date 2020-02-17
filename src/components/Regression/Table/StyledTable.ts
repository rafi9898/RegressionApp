import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledTableContainer = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  text-align: center;
`;

export const StyledViewIcon = styled.img`
  width: 23px;
  cursor: pointer;
`;

export const StyledActionLink = styled(Link)`
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
`;
