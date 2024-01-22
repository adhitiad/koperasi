import React from "react";
import FormAnggota from "@/components/FormAnggota";
import Link from "next/link";

const AddAnggota = () => {
  return (
    <>
      <div className="w-full h-full">
        <h1 className="text-3xl font-bold text-gray-900 text-center mt-4">
          Add Anggota
        </h1>
        <p className="text-center text-gray-900 mt-4">Add new Anggota</p>
        <div className="flex justify-end my-4">
          <Link href="/anggota"> Back </Link>
        </div>
        <div className="flex justify-center my-4">
          <div className="card w-[750px] bg-base-100 shadow-xl">
            <FormAnggota />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddAnggota;
