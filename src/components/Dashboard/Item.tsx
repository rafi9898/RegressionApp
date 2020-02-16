import React from "react";
import {
  StyledItemContainer,
  StyledItemIcon,
  StyledItemTitle
} from "./StyledDashboard";

const Item: React.SFC<ItemProps> = ({ icon, titleItem, color, link }) => {
  return (
    <StyledItemContainer to={link} color={color}>
      <StyledItemIcon src={icon} alt={titleItem} />
      <StyledItemTitle>{titleItem}</StyledItemTitle>
    </StyledItemContainer>
  );
};

export default Item;

export interface ItemProps {
  icon?: any;
  titleItem: string;
  color?: string;
  link?: string;
  to?: string;
}
