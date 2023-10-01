import React from "react";
import styled from "styled-components";
import { StatsProps } from "./types";

const StatsCard = ({ value, label, color }: StatsProps) => {
  return (
    <Background className="row h-100 align-content-center" color={color}>
      <div className="col text-center m-3">
        <span className="display-3">{value}</span>
        <p>{label}</p>
      </div>
    </Background>
  );
};

const Background = styled.div<{ color: string }>`
  background-color: ${(props) => props.color};
`;

export default StatsCard;
