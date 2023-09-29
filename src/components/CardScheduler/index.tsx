import React from "react";
import ListItem from "../ListItem";
import { BsCalendarEventFill, BsPencil, BsTrash3Fill } from "react-icons/bs";

const CardScheduler = ({ date }: { date?: Date | null }) => {
  return (
    <div className="d-flex flex-column p-3 h-100">
      <h3>{date?.toLocaleDateString()}</h3>
      <div className="my-3 overflow-y-auto flex-grow-1">
        {Array.from(Array(10)).map((n) => (
          <div className="card">
            <div className="card-body">
              <div className="row d-flex align-items-center gap-1 g-1">
                <div className="col col-md-1">
                  <span>08:00</span>
                </div>
                <div className="col col-md-7">
                  <ListItem key={n} />
                </div>
                <div className="col col-md-1 d-flex gap-1">
                  <BsCalendarEventFill />
                  <BsTrash3Fill />
                  <BsPencil />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardScheduler;
