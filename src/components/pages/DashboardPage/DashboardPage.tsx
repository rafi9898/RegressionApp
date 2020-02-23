import React from "react";
import { StyledContainer } from "./StyledDashboard";
import ItemsForm from "../../Dashboard/ItemsForm";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const DashboardPage: React.SFC<DashboardProps> = ({ auth }) => {
  if (!auth.uid) return <Redirect to="/" />;
  return (
    <StyledContainer>
      <ItemsForm />
    </StyledContainer>
  );
};

const mapStateToProps = (state: any) => {
  return {
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(DashboardPage);

interface DashboardProps {
  auth?: any;
}
