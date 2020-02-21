import React from "react";
import trashIcon from "../../../../assets/Trash.svg";
import {
  StyledAddedTest,
  StyledTrashIconBox,
  SyledAddedTestLabel
} from "../StyledForm";
import { StyledTrashIcon } from "../../../TestCase/Project/StyledProject";

const TestCaseItem: React.SFC<TestCaseProps> = ({
  testCaseName,
  testId,
  deleteEvent
}) => {
  const deleteTestCase = (e: any) => {
    deleteEvent(e.target.id);
  };

  return (
    <StyledAddedTest>
      <SyledAddedTestLabel>
        {testCaseName.length <= 85
          ? testCaseName
          : testCaseName?.slice(0, 85) + "..."}
      </SyledAddedTestLabel>
      <StyledTrashIconBox>
        <StyledTrashIcon
          onClick={deleteTestCase}
          id={testId}
          style={{
            width: "30px",
            cursor: "pointer"
          }}
          src={trashIcon}
          alt="Trash icon"
        />
      </StyledTrashIconBox>
    </StyledAddedTest>
  );
};

export default TestCaseItem;

interface TestCaseProps {
  testCaseName?: any;
  testId?: any;
  deleteEvent?: any;
}
