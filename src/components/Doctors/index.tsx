import React, { useEffect, useState } from "react";
import { useIndexedDB } from "react-indexed-db-hook";
import Doctor from "../Doctor";
import { DoctorsProp } from "./types";
import { Doctor as DoctorType } from "../../types";

const Doctors = ({ onSelect }: DoctorsProp) => {
  const { getAll } = useIndexedDB("doctors");
  const [doctors, setDoctors] = useState<DoctorType[]>([]);
  const [selected, setSelected] = useState<number>();

  useEffect(() => {
    getAll().then((doctorsFromDB) => setDoctors(doctorsFromDB));
  }, [getAll]);

  const handleSelected = (id: number) => {
    setSelected(id);
    if (onSelect) {
      onSelect(id);
    }
  };

  return (
    <div className="mb-3 overflow-y-auto flex-grow-1">
      {doctors.map((doctor: DoctorType) => (
        <Doctor
          key={doctor.id}
          data={doctor}
          onClick={() => handleSelected(doctor.id)}
          selected={doctor.id === selected}
        />
      ))}
    </div>
  );
};

export default Doctors;
