import React, { useEffect, useState } from "react";
import { BsFillPencilFill, BsSearch } from "react-icons/bs";
import { useIndexedDB } from "react-indexed-db-hook";
import { Appointment, Doctor } from "../../types";
import moment from "moment";

const SchedulerTable = () => {
  const { getAll: getAllAppointments } = useIndexedDB("appointments");
  const { getAll: getAllDoctors } = useIndexedDB("doctors");
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    const doctorsPromisse = getAllDoctors();
    const appointmentsPromisse = getAllAppointments();

    Promise.all([doctorsPromisse, appointmentsPromisse]).then(
      ([doctorsFromDB, appointmentsFromDB]) => {
        const newAppointments = appointmentsFromDB.map(
          (appointment: Appointment) => {
            const doctor = doctorsFromDB.find(
              (doctor: Doctor) => doctor.id === appointment.doctorId
            );
            return { ...appointment, doctor };
          }
        );
        setAppointments(newAppointments);
      }
    );
  }, [getAllAppointments, getAllDoctors]);

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
            <td>{appointment.patientName}</td>
            <td>{moment(appointment.date).format("DD/MM/YYYY hh:mm")}</td>
            <td>{appointment.doctor?.name}</td>
            <td>{appointment.email}</td>
            <td>{appointment.phone}</td>
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
