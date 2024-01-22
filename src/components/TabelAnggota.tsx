"use client";
import {
  getAnggota,
  getAnggotaById,
  hapusAnggota,
} from "@/libs/anggota/action";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const TabelAnggota = () => {
  const router = useRouter();
  const {
    data: anggotas,
    isLoading,
    isError,
    error,
    status,
    isLoadingError,
  } = useQuery({
    queryKey: ["anggotas"],
    queryFn: async () => {
      const data = await getAnggota();
      return data;
    },
  });

  const handleFilter = async (e: any) => {
    const data = await getAnggota();
    return data.filter((data: any) => {
      return data.name.match(e.target.value);
    });
  };

  const handleNext = async () => {
    const data = await handlePage(1);
    return data;
  };

  const handlePrevPage = async () => {
    const data = await handlePage(-1);
    return data;
  };

  const handlePagination = async (page: number) => {
    const data = await handlePage(page);
    return data;
  };

  const handlePage = async (page: number) => {
    const data = await getAnggota();
    return data.slice(page * 10 - 10, page * 10);
  };

  const handleJumlahHalaman = () => {
    if (anggotas) {
      return Math.ceil(anggotas.length / 10);
    } else {
      return 1;
    }
  };

  const handleDelete = async (id: string) => {
    await hapusAnggota(id);
    const res = await getAnggotaById(id);
    alert(res?.name + " Berhasil" + " Dihapus" + status);
    setTimeout(() => {
      router.refresh();
    }, 2000);
  };

  const handleEdit = (id: string) => {
    router.push(`/anggota/edit/${id}`);
  };

  if (isLoading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <p className="text-red-500 text-lg">{error.message}</p>
      </div>
    );
  }

  if (isLoadingError) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <p className="text-red-500 text-lg">Something went wrong</p>
      </div>
    );
  }

  return (
    <>
      <div className="overflow-x-auto w-full h-full p-2">
        <div className="flex justify-between items-center my-4">
          <div className="w-1/3">
            <p className="text-gray-900 text-lg font-bold">
              Total Anggota : {anggotas?.length}
            </p>
          </div>
          <div className="w-1/3">
            <p className="text-gray-900 text-lg font-bold">
              Jumlah Halaman : {handleJumlahHalaman()}
            </p>
          </div>
        </div>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                No
              </th>
              <th scope="col" className="px-6 py-3">
                Nama
              </th>
              <th scope="col" className="px-6 py-3">
                Alamat
              </th>
              <th scope="col" className="px-6 py-3">
                Telp
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {anggotas?.length === 0 && (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td colSpan={5} className="px-6 py-4">
                  Tidak ada data
                </td>
              </tr>
            )}
            {anggotas?.map((anggota: any, index: number) => (
              <tr
                key={anggota?.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {index + 1}
                </th>
                <td className="px-6 py-4">{anggota?.name}</td>
                <td className="px-6 py-4">{anggota?.address}</td>
                <td className="px-6 py-4">{anggota?.phoneNumber}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleEdit(anggota?.id)}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    className="ml-2 font-medium text-red-600 dark:text-red-500 hover:underline"
                    type="button"
                    onClick={() => handleDelete(anggota?.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* PAGINATION */}
        <div className="flex items-center justify-center mt-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={handlePrevPage}
          >
            Prev
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mx-2"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default TabelAnggota;
