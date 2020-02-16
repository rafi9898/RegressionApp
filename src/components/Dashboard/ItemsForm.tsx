import React from "react";
import { StyledBoxForm, StyledContainerForm } from "./StyledDashboard";
import Item from "./Item";
import createIcon from "../../assets/Create.svg";
import editIcon from "../../assets/Layer.svg";
import historyIcon from "../../assets/History.svg";
import projectIcon from "../../assets/History.svg";

const ItemsForm = () => {
  return (
    <StyledBoxForm>
      <StyledContainerForm>
        <Item
          icon={createIcon}
          titleItem="Create New"
          colorItem="#458BCA"
          link="/regression"
        />
        <Item
          icon={editIcon}
          titleItem="Edit List"
          colorItem="#5DB85B"
          link="/regression"
        />
      </StyledContainerForm>

      <StyledContainerForm>
        <Item
          icon={historyIcon}
          titleItem="History"
          colorItem="#D9A14F"
          link="/regression"
        />
        <Item
          icon={projectIcon}
          titleItem="Add Project"
          colorItem="#D95352"
          link="/regression"
        />
      </StyledContainerForm>
    </StyledBoxForm>
  );
};

export default ItemsForm;
