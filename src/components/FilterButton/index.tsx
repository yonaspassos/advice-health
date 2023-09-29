import React from "react";
import { BsFunnelFill } from "react-icons/bs";

const FilterButton = () => {
  return (
    <button className="btn d-flex align-items-center gap-1 text-decoration-none text-secondary">
      <BsFunnelFill />
      Filtros avançados
    </button>
  );
};
export default FilterButton;
