import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Scheduler from "./pages/Scheduler";
import Appointment from "./pages/Appointment";

function App() {
  return (
    <Router>
      <div className="container-fluid p-0 vh-100 d-flex flex-column overflow-hidden">
        <div className="row flex-grow-0">
          <Header />
        </div>
        <div className="row flex-grow-1">
          <div className="col col-md-1 overflow-hidden">
            <Sidebar />
          </div>
          <div className="col col-md-11 p-3">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/scheduler" element={<Scheduler />} />
              <Route path="/appointment" element={<Appointment />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
