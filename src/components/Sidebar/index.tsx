import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="d-flex flex-column h-100 border-end">
      <ul className="nav nav-pills nav-flush flex-column overflow-hidden">
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
    </aside>
  );
};
export default Sidebar;
