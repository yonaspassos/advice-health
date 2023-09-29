import React from "react";
import Calendar from "react-calendar";
import ListItem from "../ListItem";
import styled from "styled-components";
import { Value } from "react-calendar/dist/cjs/shared/types";

const ListScheduler = ({
  onDateChange,
}: {
  onDateChange: (newDate: Value) => void;
}) => {
  return (
    <Wrapper className="d-flex flex-column p-3 h-100">
      <h3>Médicos</h3>
      <div className="my-3 overflow-y-auto flex-grow-1">
        {Array.from(Array(10)).map((n) => (
          <ListItem key={n} />
        ))}
      </div>
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
