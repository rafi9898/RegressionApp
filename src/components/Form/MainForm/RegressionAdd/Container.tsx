import React, { Component } from "react";
import {
  StyledBox,
  StyledContainer,
  StyledFlex,
  StyledFormTitle,
  StyledForm,
  StyledInput,
  StyledSubmitButton,
  StyledSelect,
  StyledOption,
  StyledCheckboxItem,
  StyledLabelCheckbox,
  StyledCheckboxContainer,
  StyledCheckboxItemContainer
} from "../StyledForm";
import Loader from "../../../Loader/Loader";

class Container extends Component<ContainerProps> {
  state = {
    regressionTitle: "",
    regressionProject: "",
    choosedTestCases: [],
    validation: true,
    allTestCases: [
      "Test1",
      "Test2",
      "Test3",
      "Test4",
      "Test5",
      "Test6",
      "Test7",
      "Test8",
      "Test9"
    ]
  };

  render() {
    const setRegressionData = (e: any) => {
      this.setState({
        [e.target.id]: e.target.value
      });
    };

    const setRegressionTestCases = (e: any) => {
      let currentTestCaseList: string[] = this.state.choosedTestCases;
      const testId = e.target.id;
      if (e.target.checked) {
        currentTestCaseList.push(testId);
        this.setState({
          choosedTestCases: currentTestCaseList
        });
      } else {
        const index = currentTestCaseList.indexOf(testId);
        if (index > -1) {
          currentTestCaseList.splice(index, 1);
          this.setState({
            choosedTestCases: currentTestCaseList
          });
        }
      }
    };

    const addNewRegression = (e: any) => {
      e.preventDefault();
      this.state.regressionTitle &&
      this.state.regressionProject &&
      this.state.choosedTestCases.length
        ? console.log(this.state.choosedTestCases)
        : this.setState({
            validation: false
          });
    };

    const renderTestCases = this.state.allTestCases ? (
      this.state.allTestCases.map((testCase, id) => {
        return (
          <StyledCheckboxItemContainer key={id}>
            <StyledCheckboxItem
              type="checkbox"
              id={testCase}
              value={testCase}
              name={testCase}
              onChange={setRegressionTestCases}
              defaultChecked={false}
            />
            <StyledLabelCheckbox htmlFor={testCase} {...this.props}>
              {testCase}
            </StyledLabelCheckbox>
          </StyledCheckboxItemContainer>
        );
      })
    ) : (
      <StyledLabelCheckbox>No test cases found</StyledLabelCheckbox>
    );

    return (
      <StyledBox>
        <StyledContainer>
          <StyledFlex>
            <StyledFormTitle>Add New Regression</StyledFormTitle>

            <StyledForm onSubmit={addNewRegression}>
              <StyledInput
                type="text"
                required
                id="regressionTitle"
                placeholder="Regression name / ID"
                onChange={setRegressionData}
              />
              <StyledSelect
                defaultValue={"DEFAULT"}
                id="regressionProject"
                onChange={setRegressionData}
                required
                style={{
                  borderBottom: this.state.validation
                    ? "0.5px solid #707070"
                    : "0.5px solid crimson"
                }}
              >
                <StyledOption value="DEFAULT" disabled>
                  Select your project
                </StyledOption>
                <StyledOption value="Allegro1">Allegro</StyledOption>
                <StyledOption value="Allegro2">Allegro</StyledOption>
                <StyledOption value="Allegro3">Allegro</StyledOption>
              </StyledSelect>

              <StyledCheckboxContainer>
                {renderTestCases ? renderTestCases : <Loader />}
              </StyledCheckboxContainer>

              <StyledSubmitButton>Add Regression</StyledSubmitButton>
            </StyledForm>
          </StyledFlex>
        </StyledContainer>
      </StyledBox>
    );
  }
}

export default Container;

interface ContainerProps {
  regressionTitle?: string;
  regressionProject?: string;
  choosedTestCases?: any;
  validation?: boolean;
  htmlFor?: string;
  allTestCases?: Array<"">;
}
