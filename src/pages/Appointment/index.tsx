import React from "react";
import { BsSearch } from "react-icons/bs";
import SchedulerTable from "../../components/SchedulerTable";
import FilterButton from "../../components/FilterButton";

const Appointment = () => {
  return (
    <div className="d-flex flex-column container-fluid h-100 my-3">
      <div className="row">
        <div className="col col-md-5">
          <div className="input-group mb-3 p-0">
            <input type="text" className="form-control" />
            <span className="input-group-text" id="basic-addon2">
              <BsSearch />
            </span>
          </div>
        </div>
        <div className="col col-md-7 d-flex justify-content-end">
          <FilterButton />
        </div>
      </div>
      <div className="row flex-grow-1 overflow-auto">
        <div className="col col-md-12">
          <div className="row h-50">
            <div className="col">
              <SchedulerTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Appointment;
