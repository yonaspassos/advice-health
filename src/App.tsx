import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Booking from "./pages/Booking";
import Appointment from "./pages/Appointment";
import styled from "styled-components";

import * as db from "./db";
db.init();

function App() {
  return (
    <Router>
      <div className="container-fluid p-0 vh-100 d-flex flex-column overflow-hidden">
        <div className="row flex-grow-0">
          <Header />
        </div>
        <div className="row d-flex flex-grow-1 h-100">
          <div className="col flex-grow-0">
            <Sidebar />
          </div>
          <Content className="col flex-grow-1">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/appointment" element={<Appointment />} />
            </Routes>
          </Content>
        </div>
      </div>
    </Router>
  );
}

const Content = styled.div`
  height: calc(100vh - 88px);
`;

export default App;
