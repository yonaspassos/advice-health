import React, { useEffect, useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { useIndexedDB } from "react-indexed-db-hook";
import { BsTrash } from "react-icons/bs";

const CancelModal = ({ selection, onClose, date, doctorId }: any) => {
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
      <p className="display-6">Deletar a consulta</p>
      <p>Deseja deletar o hórario agendado?</p>

      <div className="row">
        <div className="col d-flex justify-content-end gap-3">
          <button className="btn btn-outline-primary" onClick={onClose}>
            Cancelar
          </button>
          <button className="btn btn-danger" onClick={onDeleteConfirm}>
            <BsTrash />
            Deletar
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default CancelModal;
