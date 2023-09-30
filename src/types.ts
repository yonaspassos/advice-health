export type Doctor = {
  id: number;
  name: string;
  specialty: string;
};

export type Address = {
  street: string;
  number: string;
  neighborhood: string;
  zipCode: string;
  city: string;
  state: string;
};

export type Appointment = {
  id: number;
  patientName: string;
  date: Date;
  cpf: string;
  birthDate: Date;
  address: Address;
  phone: string;
  email: string;
  doctorId: number;
  doctor?: Doctor;
};
