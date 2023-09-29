import React from "react";
import Calendar from "react-calendar";
import ListItem from "../ListItem";
import styled from "styled-components";

const Appointment = () => {
  return (
    <Wrapper className="p-2 h-100 d-flex flex-column">
      <Calendar className="w-100" />
      <div className="my-1 flex-grow-1 overflow-auto">
        {Array.from(Array(10)).map((n) => (
          <ListItem key={n} />
        ))}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: lightgray;
`;

export default Appointment;
