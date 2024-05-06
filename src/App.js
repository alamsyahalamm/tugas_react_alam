import React from "react";
import "./App.css";
import Tugas6 from "./tugas6/tugas6";
import Tugas7 from "./tugas7/tugas7";
import Tugas8 from "./tugas8/tugas8";
function App() {
  return (
    <div className="App">
      <Tugas6 name="Muhammad Alamsyah" />
      <Tugas7
        namaLengkap="Muhammad Alamsyah"
        Sekolah="Smk Ti Bazma"
        Ig="alamsyahalam_12"
        kelas="XII Sija"
      />
      <Tugas8/>
    </div>
  );
}

export default App;