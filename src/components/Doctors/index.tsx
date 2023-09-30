import React, { useEffect, useState } from "react";
import { useIndexedDB } from "react-indexed-db-hook";
import Doctor from "../Doctor";
import { DoctorsProp } from "./types";
import { Doctor as DoctorType } from "../../types";

const Doctors = ({ onSelect }: DoctorsProp) => {
  const { getAll } = useIndexedDB("doctors");
  const [doctors, setDoctors] = useState<DoctorType[]>([]);

  useEffect(() => {
    getAll().then((doctorsFromDB) => setDoctors(doctorsFromDB));
  }, [getAll]);

  return (
    <div className="mb-3 overflow-y-auto flex-grow-1">
      {doctors.map((doctor: DoctorType) => (
        <Doctor key={doctor.id} data={doctor} onClick={onSelect} />
      ))}
    </div>
  );
};

export default Doctors;
