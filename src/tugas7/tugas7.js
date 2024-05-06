import React from "react";

function Tugas7(props) {
  return (
    <div className="box">
      <h1 className="title">Data Pribadi</h1>
      <hr />
      <ul className="paragraph">
        <li>
          <strong>Nama Lengkap : </strong>
          {props.namaLengkap}
        </li>
        <li>
          <strong>Sekolah : </strong>
          {props.Sekolah}
        </li>
        <li>
          <strong>Kelas : </strong>
          {props.kelas}
        </li>
        <li>
          <strong>Ig: </strong>
          {props.Ig}
        </li>
      </ul>
    </div>
  );
}

export default Tugas7;