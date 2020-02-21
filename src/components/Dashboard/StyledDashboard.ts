import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledBoxForm = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 160px;

  @media (max-width: 700px) {
    padding-top: 100px;
    padding-bottom: 40px;
  }
`;

export const StyledContainerForm = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row;
  margin-bottom: 30px;

  @media (max-width: 700px) {
    margin-bottom: 0px;
  }
`;

export const StyledItemContainer = styled(Link)`
  width: 30%;
  min-height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 25px 25px;
  background-color: ${(p: ItemProps) => (p.color ? p.color : "#458bca")};
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 12px;
  opacity: 1;
  transition: all 0.3s;
  cursor: pointer;
  margin: 10px 40px;
  text-decoration: none;

  &:hover {
    transition: all 0.3s;
    transform: scale(1.05);
    text-decoration: none;
  }

  @media (max-width: 1100px) {
    width: 40%;
  }

  @media (max-width: 700px) {
    width: 80%;
    min-height: 110px;
  }
`;

export const StyledItemIcon = styled.img`
  width: 47px;
  margin: 0 auto;

  @media (max-width: 1100px) {
    width: 33px;
  }

  @media (max-width: 700px) {
    width: 26px;
  }
`;

export const StyledItemTitle = styled.h3`
  font-size: 33px;
  font-weight: bold;
  letter-spacing: 0.14px;
  color: #ffffff;
  opacity: 1;
  text-align: center;
  text-transform: uppercase;
  margin-top: 17px;

  @media (max-width: 1100px) {
    font-size: 24px;
  }

  @media (max-width: 700px) {
    font-size: 20px;
  }
`;

interface ItemProps {
  color?: string;
}
