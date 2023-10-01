import React, { useEffect, useMemo, useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { Field, Form, Formik, FormikHelpers } from "formik";
import { Appointment } from "../../types";
import { useIndexedDB } from "react-indexed-db-hook";
import moment from "moment";

interface Values {
  name: string;
  cpf: string;
  email: string;
  birthDate: string;
  phone: string;
  street: string;
  number: string;
  neighborhood: string;
  zipCode: string;
  city: string;
  state: string;
}

const AppointmentModal = ({ selection, onClose, date, doctorId }: any) => {
  const [open, setOpen] = useState(false);
  const { add, update } = useIndexedDB("appointments");

  useEffect(() => {
    setOpen(!!selection);
  }, [selection]);

  const initialData = useMemo(() => {
    const data: Values = {
      name: "",
      cpf: "",
      email: "",
      birthDate: "",
      phone: "",
      street: "",
      number: "",
      neighborhood: "",
      zipCode: "",
      city: "",
      state: "",
    };
    if (selection?.appointment) {
      const appointment: Appointment = selection.appointment;
      data.name = appointment.patientName;
      data.cpf = appointment.cpf;
      data.email = appointment.email;
      data.birthDate = moment(appointment.birthDate).format("YYYY-MM-DD");
      data.phone = appointment.phone;
      data.street = appointment.address.street;
      data.number = appointment.address.number;
      data.neighborhood = appointment.address.neighborhood;
      data.zipCode = appointment.address.zipCode;
      data.city = appointment.address.city;
      data.state = appointment.address.state;
    }
    return data;
  }, [selection]);

  const handleClose = () => {
    setOpen(false);
    onClose();
  };

  const submit = (values: Values) => {
    const appointmentDate = date;
    appointmentDate.setHours(...selection.time.split(":"));
    const appointment: Appointment = {
      patientName: values.name,
      date: appointmentDate,
      cpf: values.cpf,
      birthDate: new Date(`${values.birthDate} 12:00:00`),
      address: {
        street: values.street,
        number: values.number,
        neighborhood: values.neighborhood,
        zipCode: values.zipCode,
        city: values.city,
        state: values.state,
      },
      phone: values.phone,
      email: values.email,
      doctorId: doctorId,
    };
    if (selection?.appointment) {
      appointment.id = selection.appointment.id;
      update(appointment);
    } else {
      add(appointment);
    }

    handleClose();
  };

  return (
    <Modal
      classNames={{
        overlay: "",
        modal: "w-100",
      }}
      open={open}
      onClose={handleClose}
      center
    >
      <Formik
        initialValues={initialData}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          submit(values);
          setSubmitting(false);
        }}
      >
        <Form className="w-100 container">
          <h3 className="my-3">Consulta</h3>
          <div className="row">
            <div className="col col-md-6">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Nome completo
                </label>
                <Field
                  type="text"
                  className="form-control"
                  name="name"
                  id="name"
                />
              </div>
            </div>
            <div className="col col-md-6">
              <div className="mb-3">
                <label htmlFor="cpf" className="form-label">
                  CPF
                </label>
                <Field
                  type="text"
                  className="form-control"
                  name="cpf"
                  id="cpf"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col col-md-6">
              <div className="mb-3">
                <label htmlFor="birthDate" className="form-label">
                  Data de nascimento
                </label>
                <Field
                  type="date"
                  className="form-control"
                  name="birthDate"
                  id="birthDate"
                />
              </div>
            </div>
            <div className="col col-md-6">
              <div className="mb-3">
                <label htmlFor="inputEmail" className="form-label">
                  E-mail
                </label>
                <Field
                  type="email"
                  className="form-control"
                  name="email"
                  id="inputEmail"
                />
                <div id="emailHelp" className="form-text">
                  Digite um e-mail válido.
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col col-md-6">
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Telefone
                </label>
                <Field
                  type="text"
                  name="phone"
                  className="form-control"
                  id="phone"
                />
              </div>
            </div>
            <div className="col col-md-6">
              <div className="mb-3">
                <label htmlFor="street" className="form-label">
                  Rua
                </label>
                <Field
                  type="text"
                  name="street"
                  className="form-control"
                  id="street"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col col-md-6">
              <div className="mb-3">
                <label htmlFor="number" className="form-label">
                  Número
                </label>
                <Field
                  type="text"
                  name="number"
                  className="form-control"
                  id="number"
                />
              </div>
            </div>
            <div className="col col-md-6">
              <div className="mb-3">
                <label htmlFor="neighborhood" className="form-label">
                  Bairro
                </label>
                <Field
                  type="text"
                  name="neighborhood"
                  className="form-control"
                  id="neighborhood"
                />
              </div>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="zipCode" className="form-label">
              CEP
            </label>
            <Field
              type="text"
              name="zipCode"
              className="form-control"
              id="zipCode"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="city" className="form-label">
              Cidade
            </label>
            <Field type="text" name="city" className="form-control" id="city" />
          </div>
          <div className="mb-3">
            <label htmlFor="state" className="form-label">
              Estado
            </label>
            <Field
              type="text"
              name="state"
              className="form-control"
              id="state"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Cadastrar
          </button>
        </Form>
      </Formik>
    </Modal>
  );
};

export default AppointmentModal;
