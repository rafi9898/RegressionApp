import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledBoxForm = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 160px;
`;

export const StyledContainerForm = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row;
  margin-bottom: 30px;
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
`;

export const StyledItemIcon = styled.img`
  width: 47px;
  margin: 0 auto;
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
`;

interface ItemProps {
  color?: string;
}
