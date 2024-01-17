import React from "react";

const Pinjaman = () => {
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
      </div>
      <div className="w-full h-screen flex items-center justify-center">
        <p className="text-red-500 text-lg">Pinjaman</p>
        <p className="text-red-500 text-lg">Belum Tersedia</p>
      </div>
    </>
  );
};

export default Pinjaman;
