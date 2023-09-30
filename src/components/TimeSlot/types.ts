import { Appointment } from "../../types";

export type TimeSlotProps = {
  time: string;
  appointment?: Appointment;
  onAddClick?: () => void;
  onEditClick?: () => void;
  onDeleteClick?: () => void;
};
