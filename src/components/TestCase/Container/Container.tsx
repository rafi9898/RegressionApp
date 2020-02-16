import React, { Component } from "react";
import { StyledBox } from "./StyledContainer";
import InfoBox from "../InfoBox/InfoBox";
import Panel from "../Content/Panel";
import Loader from "../../Loader/Loader";

export class Container extends Component<{}, ContainerState> {
  state = {
    isProject: true
  };

  render() {
    const renderOption = this.state.isProject ? <Panel /> : <InfoBox />;
    return <StyledBox>{renderOption ? renderOption : <Loader />}</StyledBox>;
  }
}

export default Container;

interface ContainerState {
  isProject?: boolean;
}
