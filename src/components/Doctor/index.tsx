import React from "react";
import styled from "styled-components";
import { DoctorProp } from "./types";

const Doctor = ({ data, onClick, selected }: DoctorProp) => {
  return (
    <Card
      className="d-flex m-3 p-2 align-items-center"
      onClick={() => onClick && onClick(data)}
      selected={!!selected}
    >
      <ImagePlaceholder className="rounded-circle" />
      <div className="d-flex flex-column flex-grow-1 ms-3">
        <span className="w-75 mb-1">{data.name}</span>
        <span className="col-6">{data.specialty}</span>
      </div>
    </Card>
  );
};

const ImagePlaceholder = styled.div`
  width: 50px;
  height: 50px;
  background: url("https://i.pravatar.cc/50");
`;

const Card = styled.div<{ selected: boolean }>`
  &:hover {
    opacity: 0.8;
  }
  cursor: pointer;
  background-color: ${(props) => (props.selected ? "#77a4c3" : "white")};
`;

export default Doctor;
