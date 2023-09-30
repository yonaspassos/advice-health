import React from "react";
import TimeSlot from "../TimeSlot";
import { BsFillQuestionCircleFill } from "react-icons/bs";

const CardScheduler = ({ date }: { date?: Date | null }) => {
  return (
    <div className="d-flex flex-column p-3 h-100 justify-content-center align-items-center">
      {date ? (
        <>
          <h3>{date?.toLocaleDateString()}</h3>
          <div className="my-3 overflow-y-auto flex-grow-1">
            {Array.from(Array(10)).map((n) => (
              <TimeSlot />
            ))}
          </div>
        </>
      ) : (
        <div className="text-center w-50">
          <BsFillQuestionCircleFill size={80} />
          <p className="display-5 my-4">Selecione uma data e um médico</p>
        </div>
      )}
    </div>
  );
};

export default CardScheduler;
