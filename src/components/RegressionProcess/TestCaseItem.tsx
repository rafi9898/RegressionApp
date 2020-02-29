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
  colorTestCase,
  setNewStatusAction
}) => {
  const setPassStatus = (id: number) => {
    setNewStatusAction(id, 1);
  };

  const setFailStatus = (id: number) => {
    setNewStatusAction(id, 2);
  };

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
        <StyledVoteIcon
          onClick={() => setPassStatus(idTestCase)}
          src={voteUpIcon}
          alt="Vote Up Icon"
        />
        <StyledVoteIcon
          onClick={() => setFailStatus(idTestCase)}
          src={voteDownIcon}
          alt="Vote Down Icon"
        />
      </StyledRowIcon>
    </StyledItemContainer>
  );
};

export default TestCaseItem;

interface TestCaseProps {
  idTestCase?: any;
  titleTestCase?: any;
  statusTestCase?: string;
  colorTestCase?: string;
  setPassStatus?: any;
  setNewStatusAction?: any;
}
