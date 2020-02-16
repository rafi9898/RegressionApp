import React from "react";
import {
  StyledItemContainer,
  StyledItemIcon,
  StyledItemTitle
} from "./StyledDashboard";

const Item: React.SFC<ItemProps> = ({ icon, titleItem, colorItem, link }) => {
  return (
    <StyledItemContainer to={link} colorItem={colorItem}>
      <StyledItemIcon src={icon} alt={titleItem} />
      <StyledItemTitle>{titleItem}</StyledItemTitle>
    </StyledItemContainer>
  );
};

export default Item;

export interface ItemProps {
  icon?: any;
  titleItem: string;
  colorItem?: string;
  link?: string;
  to?: string;
}
