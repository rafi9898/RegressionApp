import React from "react";
import { StyledBox } from "./StyledContainer";
import SearchBar from "../SearchBar/SearchBar";
import Table from "../Table/Table";

const Container = () => {
  return (
    <StyledBox>
      <SearchBar />
      <Table />
    </StyledBox>
  );
};

export default Container;
