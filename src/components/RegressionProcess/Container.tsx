import React from "react";
import {
  StyledBox,
  StyledSectionTitle,
  StyledItemForm,
  StyledTimeLeftContainer,
  StyledTimeLabel,
  StyledSaveButton,
  StyledDoneButton
} from "./StyledProcess";
import TestCaseItem from "./TestCaseItem";

const Container = () => {
  return (
    <StyledBox>
      <StyledSectionTitle>This is regression title</StyledSectionTitle>
      <StyledItemForm>
        <TestCaseItem
          idTestCase="1"
          titleTestCase="Sprwadzenie poprawności wyszukiwania"
          statusTestCase="PASS"
          colorTestCase="#4F9696"
        />

        <TestCaseItem
          idTestCase="2"
          titleTestCase="Sprawdzenie formularzy"
          statusTestCase="FAIL"
          colorTestCase="#AE4242"
        />

        <TestCaseItem
          idTestCase="3"
          titleTestCase="Sprawdzenie obrazków"
          statusTestCase="PENDING"
          colorTestCase="#24240F"
        />

        <TestCaseItem
          idTestCase="4"
          titleTestCase="Responsywność"
          statusTestCase="PENDING"
          colorTestCase="#24240F"
        />

        <TestCaseItem
          idTestCase="5"
          titleTestCase="Wszystko inne"
          statusTestCase="PENDING"
          colorTestCase="#24240F"
        />
      </StyledItemForm>

      <StyledTimeLeftContainer>
        <StyledTimeLabel>0h:53m</StyledTimeLabel>
        <StyledSaveButton>SAVE</StyledSaveButton>
      </StyledTimeLeftContainer>

      <StyledDoneButton>DONE</StyledDoneButton>
    </StyledBox>
  );
};

export default Container;
