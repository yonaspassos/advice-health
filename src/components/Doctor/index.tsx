import React from "react";
import styled from "styled-components";
import { DoctorProp } from "./types";

const Doctor = ({ data, onClick }: DoctorProp) => {
  return (
    <div
      className="d-flex m-3 p-2 align-items-center bg-white"
      onClick={() => onClick && onClick(data)}
    >
      <ImagePlaceholder className="bg-secondary rounded-circle" />
      <div className="d-flex flex-column flex-grow-1 ms-3">
        <span className="w-75 mb-1">{data.name}</span>
        <span className="col-6">{data.specialty}</span>
      </div>
    </div>
  );
};

const ImagePlaceholder = styled.div`
  width: 50px;
  height: 50px;
`;

export default Doctor;
