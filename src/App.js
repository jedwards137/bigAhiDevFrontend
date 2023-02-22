import './App.css';
import React from "react";
import HomePage from "./bigAhiDev/pages/HomePage";
import {Route, Routes} from "react-router-dom";
import NavbarComponent from "./bigAhiDev/components/NavbarComponent";
import CashTrackRoutes from "./cashTrack/cashTrackRoutes";

export default function App() {
  return (
    <>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cashTrack/*" element={<CashTrackRoutes />} />
      </Routes>
    </>
  );
}
