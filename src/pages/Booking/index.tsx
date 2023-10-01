import React, { useState } from "react";
import Schedule from "../../components/Schedule";
import Doctors from "../../components/Doctors";
import Calendar from "react-calendar";
import { Value } from "react-calendar/dist/cjs/shared/types";
import styled from "styled-components";

const Scheduler = () => {
  const [date, setDate] = useState<Date | null>();
  const [doctorId, setDoctorId] = useState<number | null>();

  return (
    <div className="container-fluid h-100">
      <div className="row h-100">
        <div className="col col-md-5 d-flex flex-column h-100">
          <div className="row flex-grow-1 h-100">
            <Wrapper className="d-flex flex-column p-3 h-100">
              <h3>Médicos</h3>
              <Doctors onSelect={(id) => setDoctorId(id)} />
              <Calendar
                className="w-100"
                onChange={(newDate: Value) => setDate(newDate as Date)}
              />
            </Wrapper>
          </div>
        </div>
        <div className="col col-md-7 flex-column h-100">
          <div className="row flex-grow-1 h-100">
            <Schedule date={date} doctorId={doctorId} />
          </div>
        </div>
      </div>
    </div>
  );
};

const Wrapper = styled.div`
  background-color: #f2f8fa;
`;

export default Scheduler;
