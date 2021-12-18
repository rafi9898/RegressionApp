import React from "react";
import { StyledBox } from "./StyledContainer";
import {
  StyledTableContainer
} from "./StyledTable";
import { Table as TableBootstrap } from "react-bootstrap";
import Loader from "../Loader/Loader";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

const Container: React.SFC<ContainerProps> = ({ regression }) => {

  //@ts-ignore
  const pendingRegressions = regression && regression.filter(item => item.regressionStatus === 0).length;
  //@ts-ignore
  const doneRegressions = regression && regression.filter(item => item.regressionStatus === 1).length;

  return (
    <StyledBox>
      <StyledTableContainer>
        <TableBootstrap striped bordered hover>
          <thead>
            <tr>
              <th>Nazwa</th>
              <th>Ilość</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ilość otwartych regresji</td>
              <td>{pendingRegressions && pendingRegressions ? pendingRegressions : <Loader />}</td>
            </tr>

            <tr>
              <td>Ilość zamkniętych regresji</td>
              <td>{doneRegressions && doneRegressions ? doneRegressions : <Loader />}</td>
            </tr>
          </tbody>
        </TableBootstrap>
      </StyledTableContainer>
    </StyledBox>
  );
};

const mapStateToProps = (state: any) => {
  return {
    regression: state.firestore.ordered.regression,
    auth: state.firebase.auth
  };
};

export default compose<any>(
  connect(mapStateToProps),
  firestoreConnect((props: any) => {
    return [
      {
        collection: "regression",
        doc: props.auth.uid && props.auth.uid ? props.auth.uid : "null",
        subcollections: [
          {
            collection: "regressionItem",
            orderBy: "createdAt"
          }
        ],
        storeAs: `regression`
      }
    ];
  })
)(Container);

interface ContainerProps {
  regression?: any;
}
