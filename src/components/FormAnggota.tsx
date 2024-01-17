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
    return router.push("/anggota");
  }

  if (isError) {
    return <div>{error?.message}</div>;
  }

  return (
    <>
      <div className="w-full bg-white rounded-xl p-10">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="w-full">
            <form
              method="POST"
              action={handleSubmit}
              className="w-full space-y-4"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="phoneNumber"
                    id="phoneNumber"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <button type="submit" className="btn btn-primary btn-sm w-24">
                  Save <FaSquareEnvelope />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormAnggota;
