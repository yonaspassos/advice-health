import React from "react";
import { Link } from "react-router-dom";
import { BsCalendar, BsSpeedometer2, BsTable } from "react-icons/bs";

const Sidebar = () => {
  return (
    <aside className="d-flex flex-column h-100 border-end">
      <ul className="nav nav-pills nav-flush flex-column overflow-hidden">
        <li>
          <Link to="/" className="nav-link">
            <BsSpeedometer2 />
          </Link>
        </li>
        <li>
          <Link to="/booking" className="nav-link">
            <BsCalendar />
          </Link>
        </li>
        <li>
          <Link to="/appointment" className="nav-link">
            <BsTable />
          </Link>
        </li>
      </ul>
    </aside>
  );
};
export default Sidebar;
