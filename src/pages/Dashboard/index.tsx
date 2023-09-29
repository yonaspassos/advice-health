import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import ProfilePicturePlaceholder from "../../components/ProfilePicturePlaceholder";
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
            <div className="col">
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
