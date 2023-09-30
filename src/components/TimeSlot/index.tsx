import React from "react";
import { BsCalendarEventFill, BsPencil, BsTrash3Fill } from "react-icons/bs";
import styled from "styled-components";

const TimeSlot = () => {
  return (
    <div className="card m-2">
      <div className="card-body">
        <div className="row d-flex justify-content-between">
          <div className="col col-md-10 d-flex flex-row align-items-center">
            <div className="col col-md-2">
              <span className="display-5">08:00</span>
            </div>
            <div className="col d-flex m-3 p-2 align-items-center">
              <ImagePlaceholder className="bg-secondary rounded-circle" />
              <div className="d-flex flex-column flex-grow-1 ms-3">
                <span className="w-75 mb-1">data.name</span>
                <span className="col-6">data.specialty</span>
              </div>
            </div>
          </div>
          <div className="col col-md-1 d-flex gap-1 align-self-end">
            <BsCalendarEventFill />
            <BsTrash3Fill />
            <BsPencil />
          </div>
        </div>
      </div>
    </div>
  );
};

const ImagePlaceholder = styled.div`
  width: 50px;
  height: 50px;
`;

export default TimeSlot;
