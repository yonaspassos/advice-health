import React, { useEffect, useState } from "react";
import { BsFillPencilFill, BsSearch } from "react-icons/bs";
import { useIndexedDB } from "react-indexed-db-hook";

const SchedulerTable = () => {
  const { getAll } = useIndexedDB("appointments");
  const [appointments, setAppointments] = useState<any[]>([]);

  useEffect(() => {
    getAll().then((appointmentsFromDB) => setAppointments(appointmentsFromDB));
  }, [getAll]);

  return (
    <table className="table table-striped align-middle">
      <thead>
        <tr>
          <th></th>
          <th className="th-lg">Paciente</th>
          <th>Data da Consulta</th>
          <th>Médico</th>
          <th>E-mail</th>
          <th>Telefone</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {appointments.map((appointment, index) => (
          <tr key={index}>
            <td>
              <input className="form-check-input" type="checkbox" />
            </td>
            <td>{appointment["name"]}</td>
            <td>{appointment["date"]}</td>
            <td>{appointment["doctor_id"]}</td>
            <td>{appointment["email"]}</td>
            <td>{appointment["phone"]}</td>
            <td>
              <button className="btn">
                <BsFillPencilFill />
              </button>
              <button className="btn">
                <BsSearch />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default SchedulerTable;
