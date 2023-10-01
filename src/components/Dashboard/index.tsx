import React, { useEffect, useState } from "react";
import StatsCard from "../StatsCard";
import { useIndexedDB } from "react-indexed-db-hook";
import moment from "moment";
import { Appointment } from "../../types";

const Dashboard = () => {
  const [appointmentCount, setAppointmentCount] = useState<number>(0);

  const { getAll } = useIndexedDB("appointments");

  useEffect(() => {
    getAll().then((appointments) => {
      const today = moment().format("DD/MM/YYYY");
      const appointmentsToday = appointments.filter(
        (appointment: Appointment) =>
          moment(appointment.date).format("DD/MM/YYYY") === today
      );

      setAppointmentCount(appointmentsToday.length);
    });
  }, [getAll]);

  return (
    <div className="col">
      <div className="row">
        <h3>Dashboard</h3>
      </div>
      <div className="row mx-1 d-flex gap-3">
        <div className="col">
          <StatsCard
            value={appointmentCount.toString()}
            label="Atendimentos no dia"
            color="#3984B8"
          />
        </div>
        <div className="col d-flex flex-grow-1 flex-column">
          <div className="row flex-grow-1 mb-1">
            <StatsCard
              value="R$ 1950,00"
              label="Faturamento do dia"
              color="#B8B727"
            />
          </div>
          <div className="row flex-grow-1">
            <StatsCard
              value="5"
              label="Consultas para confirmação"
              color="#B84D4B"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
