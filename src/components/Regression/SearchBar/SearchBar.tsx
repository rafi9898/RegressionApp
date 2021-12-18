import React from "react";
import { StyledSearchBarContainer, StyledSearchBar } from "./StyledSearchBar";

const SearchBar: React.SFC<ItemProps>  = ({searchPhrase}) => {

  return (
    <StyledSearchBarContainer>
      <StyledSearchBar onKeyUp={(e) => searchPhrase(e)} type="text" placeholder="Search..." />
    </StyledSearchBarContainer>
  );
};

export default SearchBar;

export interface ItemProps {
  searchPhrase?: any;
}