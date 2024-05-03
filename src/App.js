import React from "react";
import "./App.css";
import Tugas6 from "./tugas6/tugas6";
import Tugas7 from "./tugas7/tugas7";

function App() {
  return (
    <div className="App">
      <Tugas6 name="alamsyah" />
      <Tugas7
        namaLengkap="alamsyah Pranajanala Bhamakerti"
        email="alamsyah931@smk.belajar.id"
        kelas="XII Sija"
      />
    </div>
  );
}

export default App;