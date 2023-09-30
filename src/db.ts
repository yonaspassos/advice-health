import { initDB } from "react-indexed-db-hook";
import mocks from "./initial-mocks.json";

const DBConfig = {
  name: "AdviseHealthDB",
  version: 1,
  objectStoresMeta: [
    {
      store: "doctors",
      storeConfig: { keyPath: "id", autoIncrement: true },
      storeSchema: [
        { name: "name", keypath: "name", options: { unique: false } },
        { name: "specialty", keypath: "specialty", options: { unique: false } },
      ],
    },
    {
      store: "appointments",
      storeConfig: { keyPath: "id", autoIncrement: true },
      storeSchema: [
        { name: "name", keypath: "name", options: { unique: false } },
        { name: "phone", keypath: "phone", options: { unique: false } },
        { name: "email", keypath: "email", options: { unique: false } },
        { name: "date", keypath: "date", options: { unique: false } },
        { name: "doctor_id", keypath: "doctor_id", options: { unique: false } },
      ],
    },
  ],
};

const init = async () => {
  initDB(DBConfig);

  loadInitialData();
};

const loadInitialData = () => {
  // Open the indexedDB.
  const request = indexedDB.open("AdviseHealthDB", 1);

  request.onsuccess = (event: any) => {
    var db = event.target.result;

    var tx = db.transaction(["doctors", "appointments"], "readwrite");
    const countRequest = tx.objectStore("doctors").count();
    countRequest.onsuccess = () => {
      if (countRequest.result > 0) {
        return;
      }

      mocks.doctors.forEach((doctor: any) => {
        tx.objectStore("doctors").add(doctor);
      });

      mocks.appointments.forEach((appointment: any) => {
        tx.objectStore("appointments").add(appointment);
      });

      db.close();
    };
  };

  request.onerror = console.error;
};

export { init };
