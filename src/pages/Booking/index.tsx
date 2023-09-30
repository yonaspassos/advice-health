import React, { useState } from "react";
import ListScheduler from "../../components/ListScheduler";
import Schedule from "../../components/Schedule";

const Scheduler = () => {
  const [date, setDate] = useState<Date | null>();

  return (
    <div className="container-fluid h-100">
      <div className="row h-100">
        <div className="col col-md-5 d-flex flex-column h-100">
          <div className="row flex-grow-1 h-100">
            <ListScheduler
              onDateChange={(newDate) => setDate(newDate as Date)}
            />
          </div>
        </div>
        <div className="col col-md-7 flex-column h-100">
          <div className="row flex-grow-1 h-100">
            <Schedule date={date} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Scheduler;
