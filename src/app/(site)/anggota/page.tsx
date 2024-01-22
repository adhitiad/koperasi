import TabelAnggota from "@/components/TabelAnggota";
import Link from "next/link";
import Paginate from "@/components/Paginate";
import React from "react";
import { FaPerson } from "react-icons/fa6";

const Anggota = () => {
  return (
    <>
      <div className="w-full h-full bg-slate-100">
        <h1 className="text-3xl font-bold text-gray-900 text-center mt-4">
          Anggota
        </h1>
        <p className="text-center text-gray-900 mt-4">List of Anggota</p>
        <div className="flex justify-end my-4">
          <Link
            href="/anggota/add"
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-900"
          >
            <FaPerson />
          </Link>
        </div>
        <div className="w-1/3 mx-auto mt-4">
          <input
            type="text"
            placeholder="Search..."
            name="search"
            id="search"
            autoComplete="on"
            className="w-full p-2 rounded-md"
          />
        </div>
        <TabelAnggota />
      </div>
    </>
  );
};

export default Anggota;
