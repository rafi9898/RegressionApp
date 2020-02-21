import React from "react";
import { StyledBox, StyledAddIcon } from "./StyledContainer";
import SearchBar from "../SearchBar/SearchBar";
import Table from "../Table/Table";

const Container = () => {
  return (
    <StyledBox>
      <SearchBar />
      <Table />
      <StyledAddIcon to="/regression-add">+</StyledAddIcon>
    </StyledBox>
  );
};

export default Container;
