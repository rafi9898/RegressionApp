import React, { Component } from "react";
import {
  StyledTableContainer,
  StyledViewIcon,
  StyledActionLink
} from "./StyledTable";
import { Table as TableBootstrap } from "react-bootstrap";
import viewIcon from "../../../assets/View.svg";
import { isMobile } from "react-device-detect";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import moment from "moment";
import Loader from "../../Loader/Loader";

class Table extends Component<TableProps> {
  render() {
    const { regression } = this.props;

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
        return "Pending";
      } else if (status === 1) {
        return "Done";
      } else {
        return "Fail";
      }
    };

    const renderRegressionList =
      regression &&
      regression.reverse().map((item: any) => {
        return (
          <tr key={item.id}>
            <td>{moment(item.createdAt.toDate()).calendar()}</td>
            <td>
              {!isMobile
                ? item.regressionTitle.length >= 52
                  ? item.regressionTitle.slice(0, 52) + "..."
                  : item.regressionTitle
                : item.regressionTitle.length >= 44
                ? item.regressionTitle.slice(0, 44) + "..."
                : item.regressionTitle}
            </td>
            <td>{item.regressionProjectName}</td>
            <td
              style={{
                backgroundColor: setStatusBackground(item.regressionStatus),
                color: "#FFF"
              }}
            >
              {setStatusTitle(item.regressionStatus)}
            </td>
            <td>
              <StyledActionLink to={`/retest/${item.id}`}>
                <StyledViewIcon src={viewIcon} alt="View icon" />
              </StyledActionLink>
            </td>
          </tr>
        );
      });

    return (
      <StyledTableContainer>
        <TableBootstrap striped bordered hover>
          <thead>
            <tr>
              <th>Date</th>
              <th>Title</th>
              <th>Project</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {renderRegressionList ? renderRegressionList : <Loader />}
          </tbody>
        </TableBootstrap>
      </StyledTableContainer>
    );
  }
}

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
)(Table);

interface TableProps {
  colSpan?: any;
  regression?: any;
}
