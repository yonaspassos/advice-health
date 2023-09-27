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
      <div className="container-fluid p-0">
        <Header />
        <div className="row">
          <div className="col col-md-2">
            <Sidebar />
          </div>
          <div className="col col-md-10 p-3">
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
