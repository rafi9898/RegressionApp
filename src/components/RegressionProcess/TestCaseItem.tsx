import React from "react";
import {
  StyledItemContainer,
  StyledRowId,
  StyledRowTitle,
  StyledRowStatus,
  StyledVoteIcon,
  StyledLabel,
  StyledStatusLabel,
  StyledRowIcon
} from "./StyledProcess";
import voteUpIcon from "../../assets/Like.svg";
import voteDownIcon from "../../assets/Dislike.svg";

const TestCaseItem: React.SFC<TestCaseProps> = ({
  idTestCase,
  titleTestCase,
  statusTestCase,
  colorTestCase
}) => {
  return (
    <StyledItemContainer>
      <StyledRowId>
        <StyledLabel>{idTestCase}</StyledLabel>
      </StyledRowId>

      <StyledRowTitle>
        <StyledLabel>{titleTestCase}</StyledLabel>
      </StyledRowTitle>

      <StyledRowStatus colorTestCase={colorTestCase}>
        <StyledStatusLabel>{statusTestCase}</StyledStatusLabel>
      </StyledRowStatus>

      <StyledRowIcon>
        <StyledVoteIcon src={voteUpIcon} alt="Vote Up Icon" />
        <StyledVoteIcon src={voteDownIcon} alt="Vote Down Icon" />
      </StyledRowIcon>
    </StyledItemContainer>
  );
};

export default TestCaseItem;

interface TestCaseProps {
  idTestCase?: string;
  titleTestCase?: string;
  statusTestCase?: string;
  colorTestCase?: string;
}
