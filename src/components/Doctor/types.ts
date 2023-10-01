import { Doctor } from "../../types";

export type DoctorProp = {
  data: Doctor;
  onClick?: (doctor: Doctor) => void;
  selected?: boolean;
};
