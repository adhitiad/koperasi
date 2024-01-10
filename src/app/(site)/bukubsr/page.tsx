"use client";
import React, { useState } from "react";
import { exportToExcel } from "@/utils/exportXls";

export default function BukuBesar() {
  const handleExportToExcel = () => {
    exportToExcel("Buku_Besar", "Buku_Besar");
  };

  return (
    <>
      <div className="bg-gradient-to-b from-[#2e026d] to-[#15162c] min-h-screen flex flex-col">
        <button
          className="mt-4 p-2 bg-blue-500 text-white rounded-md"
          onClick={handleExportToExcel}
        >
          Export to Excel
        </button>
      </div>
    </>
  );
}
