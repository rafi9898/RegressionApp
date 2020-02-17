import React, { Component } from "react";
import {
  StyledTableContainer,
  StyledViewIcon,
  StyledActionLink
} from "./StyledTable";
import { Table as TableBootstrap } from "react-bootstrap";
import viewIcon from "../../../assets/View.svg";

class Table extends Component<TableProps> {
  render() {
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
            <tr>
              <td>05.12.2020</td>
              <td>Testy regresyjne dla wyszukiwarki</td>
              <td>Allegro</td>
              <td style={{ backgroundColor: "#4F9696", color: "#FFF" }}>
                Done
              </td>
              <td>
                <StyledActionLink to="/retest/1">
                  <StyledViewIcon src={viewIcon} alt="View icon" />
                </StyledActionLink>
              </td>
            </tr>
            <tr>
              <td>05.12.2020</td>
              <td>Testy regresyjne dla wyszukiwarki</td>
              <td>Allegro</td>
              <td style={{ backgroundColor: "#24240F", color: "#FFF" }}>
                Pending
              </td>
              <td>
                <StyledActionLink to="/retest/1">
                  <StyledViewIcon src={viewIcon} alt="View icon" />
                </StyledActionLink>
              </td>
            </tr>
            <tr>
              <td>05.12.2020</td>
              <td>Testy regresyjne dla wyszukiwarki</td>
              <td>Allegro</td>
              <td style={{ backgroundColor: "#4F9696", color: "#FFF" }}>
                Done
              </td>
              <td>
                <StyledActionLink to="/retest/1">
                  <StyledViewIcon src={viewIcon} alt="View icon" />
                </StyledActionLink>
              </td>
            </tr>
          </tbody>
        </TableBootstrap>
      </StyledTableContainer>
    );
  }
}

export default Table;

interface TableProps {
  colSpan?: any;
}
