import React from "react";
import "react-calendar/dist/Calendar.css";
import { BsSearch } from "react-icons/bs";
import DashboardComponent from "../../components/Dashboard";
import Table from "../../components/Table";
import Appointment from "../../components/Appointment";

const Dashboard = () => {
  return (
    <div className="container-fluid h-100">
      <div className="row h-100">
        <div className="col col-md-8 my-3">
          <div className="row">
            <div className="input-group mb-3 p-0">
              <input type="text" className="form-control" />
              <span className="input-group-text" id="basic-addon2">
                <BsSearch />
              </span>
            </div>
          </div>
          <div className="row">
            <DashboardComponent />
          </div>
          <div className="row">
            <div className="col h-100 d-flex flex-column flex-grow-1 overflow-y-auto">
              <Table />
            </div>
          </div>
        </div>
        <div className="col col-md-4 h-100">
          <Appointment />
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
