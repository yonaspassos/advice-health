import React, { useEffect, useMemo, useState } from "react";
import TimeSlot from "../TimeSlot";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { Appointment as AppointmentType } from "../../types";
import moment from "moment";
import { useIndexedDB } from "react-indexed-db-hook";
import Moment from "react-moment";

const Schedule = ({ date }: { date?: Date | null }) => {
  const { getAll } = useIndexedDB("appointments");
  const [appointments, setAppointments] = useState<AppointmentType[]>([]);

  useEffect(() => {
    getAll().then((appointmentsFromDB) =>
      setAppointments(
        appointmentsFromDB.map((appointment) => ({
          ...appointment,
          date: new Date(appointment.date),
        }))
      )
    );
  }, [getAll]);

  const slots = useMemo(() => {
    const base = date || new Date();
    const times = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
      .map((hour: number) =>
        [0, 30].map((minute: number) => {
          base.setHours(hour, minute, 0, 0);
          return base.toISOString();
        })
      )
      .flat(1);

    return times.map((time: string) => {
      const appointment = appointments.find((a: AppointmentType) => {
        console.log(a.date, time);
        return a.date.toISOString() === time;
      });
      return {
        time: moment(time).format("HH:mm"),
        appointment: appointment,
      };
    });
  }, [appointments, date]);

  return (
    <div className="d-flex flex-column p-3 h-100">
      {date ? (
        <>
          <h3>
            <Moment format="DD/MM/YYYY">{date}</Moment>
          </h3>
          <div className="my-3 overflow-y-auto flex-grow-1">
            {slots.map((slot) => (
              <TimeSlot time={slot.time} appointment={slot.appointment} />
            ))}
          </div>
        </>
      ) : (
        <div className="d-flex h-100 justify-content-center align-items-center">
          <div className="text-center w-50">
            <BsFillQuestionCircleFill size={80} />
            <p className="display-5 my-4">Selecione uma data e um médico</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Schedule;
