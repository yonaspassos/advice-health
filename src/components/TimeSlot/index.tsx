import React from "react";
import {
  BsCalendarEventFill,
  BsPencil,
  BsPlusCircleFill,
  BsTrash3Fill,
} from "react-icons/bs";
import styled from "styled-components";
import { TimeSlotProps } from "./types";

const TimeSlot = ({ time, appointment }: TimeSlotProps) => {
  const data = appointment;
  return (
    <div className="card m-2">
      <div className="card-body">
        <div className="row d-flex justify-content-between">
          <div className="col col-md-10 d-flex flex-row align-items-center">
            <div className="col col-md-2">
              <span className="display-5">{time}</span>
            </div>
            <div className="col d-flex m-3 p-2 align-items-center">
              <ImagePlaceholder className="bg-secondary rounded-circle" />
              <div className="d-flex flex-column flex-grow-1 ms-3">
                <span className="w-75 mb-1">{appointment?.patientName}</span>
                <span className="col-6">
                  {appointment?.phone} {appointment?.email}
                </span>
              </div>
            </div>
          </div>
          {data ? (
            <div className="col col-md-1 d-flex gap-1 align-self-end">
              <BsCalendarEventFill />
              <BsTrash3Fill />
              <BsPencil />
            </div>
          ) : (
            <div className="col col-md-1 d-flex gap-1 align-self-end">
              <BsPlusCircleFill size={30} />
            </div>
          )}
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
