import React, { Component } from "react";
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
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import Loader from "../Loader/Loader";
import { updateRegression } from "../../store/actions/regressionActions";
import { Redirect } from "react-router-dom";

class Container extends Component<any, ContainerProps> {
  state = {
    regressionId: "",
    projectTitle: "",
    testCases: [],
    statusTestCases: [],
    unauthorized: false
  };

  componentWillReceiveProps(ownProps: any) {
    if (ownProps.regression && ownProps.regression) {
      ownProps.regression.map((item: any) => {
        return this.setState({
          regressionId: item.id,
          projectTitle: item.regressionProjectName,
          testCases: item.choosedTestCases,
          statusTestCases: item.statusChoosedTestCases
        });
      });
    }
    if (ownProps.regression.length <= 0) {
      this.setState({
        unauthorized: true
      });
    }
  }

  render() {
    const { updateRegression } = this.props;

    const setTestCaseStatus = (id: number, status: number) => {
      let currentTestCaseStatus: number[] = this.state.statusTestCases;
      currentTestCaseStatus[id] = status;
      this.setState({
        statusTestCases: currentTestCaseStatus
      });
    };

    const setStatusBackground = (status: any) => {
      if (status === 0) {
        return "#24240F";
      } else if (status === 1) {
        return "#4F9696";
      } else {
        return "#c73a43";
      }
    };

    const setStatusTitle = (status: any) => {
      if (status === 0) {
        return "PENDING";
      } else if (status === 1) {
        return "PASS";
      } else {
        return "FAIL";
      }
    };

    const renderRegressionItem =
      this.state.testCases && this.state.testCases ? (
        this.state.testCases.map((item: any, id: number) => {
          return (
            <TestCaseItem
              key={id}
              setNewStatusAction={setTestCaseStatus}
              idTestCase={id}
              titleTestCase={item}
              statusTestCase={setStatusTitle(this.state.statusTestCases[id])}
              colorTestCase={setStatusBackground(
                this.state.statusTestCases[id]
              )}
            />
          );
        })
      ) : (
        <Loader />
      );

    const updateCurrentRegression = () => {
      if (this.state.regressionId) {
        updateRegression(this.state);
      }
    };

    if (this.state.unauthorized) return <Redirect to="/regression" />;
    return (
      <StyledBox>
        <StyledSectionTitle>{this.state.projectTitle}</StyledSectionTitle>
        <StyledItemForm>
          {renderRegressionItem ? renderRegressionItem : <Loader />}
        </StyledItemForm>

        <StyledTimeLeftContainer>
          <StyledTimeLabel>COMING SOON</StyledTimeLabel>
          <StyledSaveButton>SAVE</StyledSaveButton>
        </StyledTimeLeftContainer>

        <StyledDoneButton onClick={updateCurrentRegression}>
          DONE
        </StyledDoneButton>
      </StyledBox>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    regression: state.firestore.ordered.regression,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    updateRegression: (regression: any) =>
      dispatch(updateRegression(regression))
  };
};

export default compose<any>(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect((props: any) => {
    return [
      {
        collection: "regression",
        doc: props.auth.uid && props.auth.uid ? props.auth.uid : "null",
        subcollections: [
          {
            collection: "regressionItem",
            doc:
              props.match.params.id && props.match.params.id
                ? props.match.params.id
                : null
          }
        ],
        storeAs: `regression`
      }
    ];
  })
)(Container);

interface ContainerProps {
  match?: any;
  regression?: any;
  projectTitle?: string;
  testCases?: any;
  statusTestCases?: any;
  idTestCase?: any;
  regressionId?: string;
  unauthorized?: boolean;
}
