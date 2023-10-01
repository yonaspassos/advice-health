import React from "react";
import styled from "styled-components";
import StatsCard from "../StatsCard";

const Dashboard = () => {
  return (
    <div className="col">
      <div className="row">
        <h3>Dashboard</h3>
      </div>
      <div className="row mx-1 d-flex gap-3">
        <div className="col">
          <StatsCard
            value="R$ 500,00"
            label="Faturamento do dia"
            color="#3984B8"
          />
        </div>
        <div className="col d-flex flex-grow-1 flex-column">
          <div className="row flex-grow-1 mb-1">
            <StatsCard
              value="100"
              label="Atendimentos no dia"
              color="#B8B727"
            />
          </div>
          <div className="row flex-grow-1">
            <StatsCard
              value="5"
              label="Consultas para confirmação"
              color="#B84D4B"
            />
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
