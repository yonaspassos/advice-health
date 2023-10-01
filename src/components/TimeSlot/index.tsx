import React from "react";
import {
  BsCalendarEventFill,
  BsPencil,
  BsPlusCircleFill,
  BsTrash3Fill,
} from "react-icons/bs";
import styled from "styled-components";
import { TimeSlotProps } from "./types";

const TimeSlot = ({
  time,
  appointment,
  onAddClick,
  onEditClick,
  onDeleteClick,
  onEditDateClick,
}: TimeSlotProps) => {
  const data = appointment;
  return (
    <div className="card m-2">
      <div className="card-body">
        <div className="row d-flex justify-content-between">
          <div className="col col-md-10 d-flex flex-row align-items-center">
            <div className="col col-md-2">
              <span className="display-5">{time}</span>
            </div>
            <div className="col d-flex mx-3 px-2 align-items-center">
              {appointment?.patientName && (
                <ImagePlaceholder className="rounded-circle" />
              )}
              <div className="d-flex flex-column flex-grow-1 ms-3">
                <span className="w-75 mb-1">{appointment?.patientName}</span>
                <span>
                  {[appointment?.phone, appointment?.email]
                    .filter((n) => n)
                    .join(" / ")}
                </span>
              </div>
            </div>
          </div>
          {data ? (
            <div className="col col-md-2 d-inline-flex align-self-end justify-content-around">
              <Button>
                <BsCalendarEventFill onClick={onEditDateClick} />
              </Button>
              <Button onClick={onDeleteClick}>
                <BsTrash3Fill />
              </Button>
              <Button onClick={onEditClick}>
                <BsPencil />
              </Button>
            </div>
          ) : (
            <div className="col col-md-1 d-inline-flex align-self-end justify-content-around">
              <Button onClick={onAddClick}>
                <BsPlusCircleFill size={20} />
              </Button>
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
  background: url("https://i.pravatar.cc/50");
`;

const Button = styled.button`
  border: none;
  background-color: transparent;
  &:hover {
    color: #3984b8;
  }
`;

export default TimeSlot;
