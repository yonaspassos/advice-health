import React, { useCallback, useEffect, useMemo, useState } from "react";
import TimeSlot from "../TimeSlot";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { Appointment as AppointmentType } from "../../types";
import moment from "moment";
import { useIndexedDB } from "react-indexed-db-hook";
import AppointmentModal from "../AppointmentModal";
import CancelModal from "../CancelModal";
import { ScheduleProps } from "./types";
import EditDateModal from "../EditDateModal";

type Slot = {
  time: string;
  appointment: AppointmentType | undefined;
};

const Schedule = ({ date, doctorId }: ScheduleProps) => {
  const { getAll } = useIndexedDB("appointments");
  const [appointments, setAppointments] = useState<AppointmentType[]>([]);
  const [toUpsert, setToUpsert] = useState<Slot | null>();
  const [toDelete, setToDelete] = useState<Slot | null>();
  const [toEditDate, setToEditDate] = useState<Slot | null>();

  const fetchData = useCallback(() => {
    getAll().then((appointmentsFromDB) => {
      const filteredAppointments = appointmentsFromDB.filter(
        (appointment: AppointmentType) => {
          const appointmentDate = moment(appointment.date).format("YYYY-MM-DD");
          return (
            appointmentDate === moment(date).format("YYYY-MM-DD") &&
            appointment.doctorId === doctorId
          );
        }
      );

      setAppointments(
        filteredAppointments.map((appointment) => ({
          ...appointment,
          date: new Date(appointment.date),
        }))
      );
    });
  }, [getAll, date, doctorId]);

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
      {date && doctorId ? (
        <>
          <h3>{moment(date).format("DD/MM/YYYY")}</h3>
          <div className="my-3 overflow-y-auto flex-grow-1">
            {slots.map((slot) => (
              <TimeSlot
                key={slot.time}
                time={slot.time}
                appointment={slot.appointment}
                onAddClick={() => setToUpsert(slot)}
                onDeleteClick={() => setToDelete(slot)}
                onEditClick={() => setToUpsert(slot)}
                onEditDateClick={() => setToEditDate(slot)}
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
        selection={toUpsert}
        onClose={() => {
          setToUpsert(null);
          fetchData();
        }}
        date={date}
        doctorId={doctorId}
      />
      <CancelModal
        selection={toDelete}
        onClose={() => {
          setToDelete(null);
          fetchData();
        }}
      />
      <EditDateModal
        selection={toEditDate}
        onClose={() => {
          setToEditDate(null);
          fetchData();
        }}
      />
    </div>
  );
};

export default Schedule;
