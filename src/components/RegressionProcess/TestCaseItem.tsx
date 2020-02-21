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
import { MobileView, BrowserView } from "react-device-detect";

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
        <MobileView>
          <StyledLabel>
            {titleTestCase.length >= 32
              ? titleTestCase?.slice(0, 32) + "..."
              : titleTestCase}
          </StyledLabel>
        </MobileView>

        <BrowserView>
          <StyledLabel>
            {titleTestCase.length >= 52
              ? titleTestCase?.slice(0, 52) + "..."
              : titleTestCase}
          </StyledLabel>
        </BrowserView>
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
  titleTestCase?: any;
  statusTestCase?: string;
  colorTestCase?: string;
}
