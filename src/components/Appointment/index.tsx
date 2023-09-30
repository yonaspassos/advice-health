import React from "react";
import Calendar from "react-calendar";
import styled from "styled-components";
import Doctors from "../Doctors";

const Appointment = () => {
  return (
    <Wrapper className="p-2 h-100 d-flex flex-column">
      <Calendar className="w-100" />
      <Doctors />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #f2f8fa;
`;

export default Appointment;
