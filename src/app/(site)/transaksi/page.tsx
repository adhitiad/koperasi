// buku-besar.js
"use client";
import React, { useState } from "react";

interface TransaksiProps {
  transaksi: any;
  keterangan: string;
  nominal: number;
}

const Transaksi = () => {
  const [transaksi, setTransaksi] = useState([]);
  const [keterangan, setKeterangan] = useState("");
  const [nominal, setNominal] = useState("");

  const tambahTransaksi = async () => {
    if (!nominal) {
      alert("Nominal tidak boleh kosong");
      return;
    }

    const newTransaksi: { keterangan: string; nominal: number } = {
      keterangan: keterangan,
      nominal: parseInt(nominal),
    };

    setTransaksi(newTransaksi as any);
  };

  const hitungSaldo = () => {
    return transaksi.reduce(
      (saldo, transaksi: any) => saldo + transaksi.nominal,
      0
    );
  };

  return (
    <div>
      <h1>Buku Besar Koperasi</h1>
      <div>
        <h2>Transaksi</h2>
        <ul>
          {transaksi.map((item: any, index) => (
            <li key={index}>
              {item.keterangan}: {item.nominal}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Tambah Transaksi</h2>
        <label>
          Keterangan:
          <input
            type="text"
            value={keterangan}
            onChange={(e) => setKeterangan(e.target.value)}
          />
        </label>
        <label>
          Nominal:
          <input
            type="text"
            value={nominal}
            onChange={(e) => setNominal(e.target.value)}
          />
        </label>
        <button onClick={tambahTransaksi}>Tambah</button>
      </div>
      <div>
        <h2>Saldo</h2>
        <p>Saldo: {hitungSaldo()}</p>
      </div>
    </div>
  );
};

export default Transaksi;
