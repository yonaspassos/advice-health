import React, { useCallback, useEffect, useMemo, useState } from "react";
import TimeSlot from "../TimeSlot";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { Appointment as AppointmentType } from "../../types";
import moment from "moment";
import { useIndexedDB } from "react-indexed-db-hook";
import AppointmentModal from "../AppointmentModal";
import { type } from "os";

const Schedule = ({ date }: { date?: Date | null }) => {
  const { getAll } = useIndexedDB("appointments");
  const [appointments, setAppointments] = useState<AppointmentType[]>([]);
  const [selection, setSelection] = useState<any>();

  const fetchData = useCallback(() => {
    getAll().then((appointmentsFromDB) =>
      setAppointments(
        appointmentsFromDB.map((appointment) => ({
          ...appointment,
          date: new Date(appointment.date),
        }))
      )
    );
  }, [getAll]);

  useEffect(() => {
    fetchData();
  }, [fetchData, date]);

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
          <h3>{moment(date).format("DD/MM/YYYY")}</h3>
          <div className="my-3 overflow-y-auto flex-grow-1">
            {slots.map((slot) => (
              <TimeSlot
                time={slot.time}
                appointment={slot.appointment}
                onAddClick={() => setSelection(slot)}
                onDeleteClick={() => setSelection(slot)}
                onEditClick={() => setSelection(slot)}
              />
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
      <AppointmentModal
        selection={selection}
        onClose={() => {
          setSelection(null);
          fetchData();
        }}
        date={date}
        doctorId={1}
      />
    </div>
  );
};

export default Schedule;
