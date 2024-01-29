// buku-besar.js
"use client";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const Transaksi = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-[#2e026d] to-[#15162c] min-h-full w-full">
        <div className="flex justify-center items-center h-full">
          <p className="text-3xl font-bold text-white text-center">Transaksi</p>
        </div>
        <p className="text-white text-center">List of Transaksi</p>
        <div className="flex justify-center items-center h-full">
          <div className="w-1/3">
            <input
              type="text"
              placeholder="Search..."
              name="search"
              id="search"
              autoComplete="off"
              className="w-full p-2 rounded-md"
            />
          </div>
        </div>
        <div className="flex justify-center items-center h-full my-2">
          <table className="table w-full table-zebra border rounded">
            <thead>
              <tr>
                <th>No</th>
                <th>Akun</th>
                <th>Debit</th>
                <th>Credit</th>
                <th>Jenis Transaksi</th>
                <th>Description</th>
                <th>Balance</th>
              </tr>
            </thead>
            <tbody>
              <tr></tr>
            </tbody>
          </table>
        </div>
        <div className="">
          <button className="btn btn-primary btn-xs" onClick={() => {}}>
            Export
          </button>
        </div>
      </div>
    </>
  );
};

export default Transaksi;
