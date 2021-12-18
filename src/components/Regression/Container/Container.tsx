import React, { useState } from "react";
import { StyledBox, StyledAddIcon } from "./StyledContainer";
import SearchBar from "../SearchBar/SearchBar";
import Table from "../Table/Table";

const Container = () => {
  
  const [searchVal, setSearchVal] = useState("");

  const searchFilter = (e:any) => {
    setSearchVal(e.target.value);
  } 

  return (
    <StyledBox>
      <SearchBar searchPhrase={searchFilter} />
      <Table searchValue={searchVal} />
      <StyledAddIcon to="/regression-add">+</StyledAddIcon>
    </StyledBox>
  );
};

export default Container;
