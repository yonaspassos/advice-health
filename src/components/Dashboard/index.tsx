import React from "react";
import styled from "styled-components";

const Dashboard = () => {
  return (
    <div className="col">
      <div className="row">
        <h3>Dashboard</h3>
      </div>
      <div className="row mx-1 d-flex">
        <ChartBig className="col bg-secondary flex-grow-1" />
        <div className="col ms-1 d-flex flex-grow-1 flex-column">
          <div className="row flex-grow-1 mb-1">
            <div className="col bg-secondary"></div>
          </div>
          <div className="row flex-grow-1">
            <div className="col bg-secondary"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ChartBig = styled.div`
  height: 300px;
`;
export default Dashboard;
