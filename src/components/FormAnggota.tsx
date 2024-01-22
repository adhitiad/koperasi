"use client";

import { tambahAnggota } from "@/libs/anggota/action";
import { Role } from "@prisma/client";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React from "react";
import { FaSquareEnvelope } from "react-icons/fa6";

interface Anggota {
  name: string;
  email: string;
  address: string;
  phoneNumber: string;
}

const FormAnggota = () => {
  const router = useRouter();
  const {
    mutate: tambah,
    isError,
    error,
    isSuccess,
    status,
  } = useMutation({
    mutationFn: (data: any) => {
      const dataAnggota: Anggota = {
        name: data.name,
        email: data.email,
        address: "",
        phoneNumber: data.phoneNumber,
      };

      return tambahAnggota(dataAnggota);
    },
  });

  const handleSubmit = (formData: FormData) => {
    const data = Object.fromEntries(formData);
    const form = { ...data };
    tambah(form);
  };

  if (isSuccess) {
    setTimeout(() => {
      router.push("/anggota");
    }, 3000);

    return (
      <div className="text-green-500 text-lg font-semibold mt-4 text-center p-4">
        Anggota Berhasil
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-red-500 text-lg font-semibold mt-4 text-center p-4">
        {error?.message}: {status}
      </div>
    );
  }

  return (
    <>
      {/* bikin form yang menarik dan responsive dengan tailwind */}
      <form action={handleSubmit} className="w-full">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-semibold">
              Nama
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="border-2 border-gray-300 rounded-md p-2"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-semibold">
              Email
            </label>
            <div className="flex items-center gap-2">
              <FaSquareEnvelope className="text-gray-500" />
              <input
                type="email"
                id="email"
                name="email"
                className="border-2 border-gray-300 rounded-md p-2"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="phoneNumber" className="text-sm font-semibold">
              Nomor Telepon
            </label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              className="border-2 border-gray-300 rounded-md p-2"
            />
            <div className="text-xs text-gray-500">Contoh: 081212345678</div>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
            >
              Tambah
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default FormAnggota;
