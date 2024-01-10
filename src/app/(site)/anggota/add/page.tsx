import React from "react";
import FormAnggota from "@/components/FormAnggota";

const AddAnggota = () => {
  return (
    <>
      <div className="w-full h-full">
        <h1 className="text-3xl font-bold text-gray-900 text-center mt-4">
          Add Anggota
        </h1>
        <p className="text-center text-gray-900 mt-4">Add new Anggota</p>
        <FormAnggota />
      </div>
    </>
  );
};

export default AddAnggota;
