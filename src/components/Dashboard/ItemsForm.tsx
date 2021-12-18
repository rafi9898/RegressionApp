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
          color="#458BCA"
          link="/regression"
        />
        <Item
          icon={editIcon}
          titleItem="Edit List"
          color="#5DB85B"
          link="/testcases"
        />
      </StyledContainerForm>

      <StyledContainerForm>
        <Item
          icon={historyIcon}
          titleItem="History"
          color="#D9A14F"
          link="/history"
        />
        <Item
          icon={projectIcon}
          titleItem="Add Project"
          color="#D95352"
          link="/add-project"
        />
      </StyledContainerForm>
    </StyledBoxForm>
  );
};

export default ItemsForm;
