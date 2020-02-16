import React from "react";
import { StyledContainer, StyledMoreButton } from "./StyledContent";
import ProjectItem from "./ProjectItem";
import SearchBar from "./SearchBar/SearchBar";

const Panel = () => {
  return (
    <React.Fragment>
      <SearchBar />
      <StyledContainer>
        <ProjectItem
          itemTitle="Allegro"
          desc="To jest troszkę dłuższy opis, który będzie widoczny na tej stronie opisującej wstępnie projekt."
          link="/testcase/1"
        />
        <ProjectItem
          itemTitle="Allegro"
          desc="To jest troszkę dłuższy opis, który będzie widoczny na tej stronie opisującej wstępnie projekt."
          link="/testcase/2"
        />
        <ProjectItem
          itemTitle="Allegro"
          desc="To jest troszkę dłuższy opis, który będzie widoczny na tej stronie opisującej wstępnie projekt."
          link="/testcase/3"
        />
        <ProjectItem
          itemTitle="Allegro"
          desc="To jest troszkę dłuższy opis, który będzie widoczny na tej stronie opisującej wstępnie projekt."
          link="/testcase/4"
        />
      </StyledContainer>
      <div style={{ textAlign: "center" }}>
        <StyledMoreButton>More</StyledMoreButton>
      </div>
    </React.Fragment>
  );
};

export default Panel;
