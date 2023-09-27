import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <ul
        className="nav nav-pills nav-flush flex-column"
        style={{ backgroundColor: "yellow" }}
      >
        <li>
          <Link to="/" className="nav-link">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/scheduler" className="nav-link">
            Agendamento
          </Link>
        </li>
        <li>
          <Link to="/appointment" className="nav-link">
            Consultas
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;
