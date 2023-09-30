import React from "react";
import Calendar from "react-calendar";
import styled from "styled-components";
import { Value } from "react-calendar/dist/cjs/shared/types";
import Doctors from "../Doctors";
import { Doctor } from "../../types";

const ListScheduler = ({
  onDateChange,
}: {
  onDateChange: (newDate: Value) => void;
}) => {
  const onDoctorSelect = (doctor: Doctor) => {
    console.log(doctor);
  };

  return (
    <Wrapper className="d-flex flex-column p-3 h-100">
      <h3>Médicos</h3>
      <Doctors onSelect={onDoctorSelect} />
      <Calendar
        className="w-100"
        onChange={(newDate: Value) => onDateChange(newDate)}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: lightgray;
`;

export default ListScheduler;