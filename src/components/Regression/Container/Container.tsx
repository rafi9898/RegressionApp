import React from "react";
import { StyledBox, StyledAddIcon } from "./StyledContainer";
import SearchBar from "../SearchBar/SearchBar";
import Table from "../Table/Table";

const Container = () => {
  return (
    <StyledBox>
      <SearchBar />
      <Table />
      <StyledAddIcon>+</StyledAddIcon>
    </StyledBox>
  );
};

export default Container;
