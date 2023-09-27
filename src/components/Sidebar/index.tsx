import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/scheduler">Agendamento</Link>
        </li>
        <li>
          <Link to="/appointment">Consultas</Link>
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;
