import React from "react";
import TimeSlot from "../TimeSlot";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { Appointment } from "../../types";

const Schedule = ({ date }: { date?: Date | null }) => {
  const appointment: Appointment = {
    patientName: "Sr. Batata",
    id: 0,
    cpf: "0000000000",
    birthDate: new Date(),
    address: {
      street: "Rua da batata",
      number: "10",
      neighborhood: "",
      zipCode: "",
      city: "",
      state: "",
    },
    phone: "(48)99999999",
    email: "gagarin@esportudo.com",
  };
  return (
    <div className="d-flex flex-column p-3 h-100">
      {date ? (
        <>
          <h3>{date?.toLocaleDateString()}</h3>
          <div className="my-3 overflow-y-auto flex-grow-1">
            {Array.from(Array(10)).map((n) => (
              <TimeSlot time={"08:00"} appointment={appointment} />
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
