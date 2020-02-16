import React from "react";
import { StyledSearchBarContainer, StyledSearchBar } from "./StyledSearchBar";

const SearchBar = () => {
  return (
    <StyledSearchBarContainer>
      <StyledSearchBar type="text" placeholder="Search..." />
    </StyledSearchBarContainer>
  );
};

export default SearchBar;
