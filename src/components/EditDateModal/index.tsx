import React, { useEffect, useMemo, useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { useIndexedDB } from "react-indexed-db-hook";

const EditDateModal = ({ selection, onClose, date, doctorId }: any) => {
  const [open, setOpen] = useState(false);
  const { deleteRecord } = useIndexedDB("appointments");

  useEffect(() => {
    setOpen(!!selection);
  }, [selection]);

  const onDeleteConfirm = () => {
    if (!selection?.appointment.id) {
      return;
    }
    deleteRecord(selection.appointment.id).then(() => {
      setOpen(false);
      onClose();
    });
  };

  const times = useMemo(() => {
    return [8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
      .map((hour: number) =>
        [0, 30].map((minute: number) => {
          return `${hour.toString().padStart(2, "0")}:${minute
            .toString()
            .padStart(2, "0")}`;
        })
      )
      .flat(1);
  }, []);

  return (
    <Modal
      classNames={{
        overlay: "",
        modal: "w-25",
      }}
      open={open}
      onClose={() => {
        setOpen(false);
        onClose();
      }}
      center
    >
      <p className="display-6">Reagendar a consulta</p>
      <p>Reagendar o hórario de consulta, selecione o novo hórario e data</p>
      <div className="row">
        <div className="col col-md-6">
          <div className="mb-3">
            <input type="date" className="form-control" name="date" id="date" />
          </div>
        </div>
        <div className="col col-md-6">
          <select className="form-select">
            {times.map((time) => (
              <option value={time}>{time}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="row">
        <div className="col d-flex justify-content-end gap-3">
          <button className="btn btn-outline-primary" onClick={onClose}>
            Cancelar
          </button>
          <button className="btn btn-warning">Confirmar</button>
        </div>
      </div>
    </Modal>
  );
};

export default EditDateModal;
