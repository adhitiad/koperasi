"use client";
import { getAnggota, getAnggotaById } from "@/libs/anggota/action";
import Link from "next/link";
import React from "react";

const TabelAnggota = () => {
  const [anggotas, setAnggotas] = React.useState<any>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<any>(null);
  const [paginate, setPaginate] = React.useState<number>(10);
  const [page, setPage] = React.useState<number>(1);

  const getAnggotaPaginate = async (page: number, paginate: number) => {
    const response = await getAnggota();
    setAnggotas(response.slice((page - 1) * paginate, page * paginate));
  };

  const handlePaginate = (event: any) => {
    const selected = Number(event.target.value);
    setPaginate(selected);
    setPage(1);
    getAnggotaPaginate(1, selected);
  };

  const handlePage = (event: any) => {
    const selected = Number(event.target.value);
    setPage(selected);
    getAnggotaPaginate(selected, paginate);
  };

  React.useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await getAnggota();
        setAnggotas(data);
        setLoading(false);
      } catch (error: any) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="overflow-x-auto w-full h-full p-2">
        <div className="flex justify-between items-center my-4">
          <div className="w-1/3">
            <select className="w-full p-2 rounded-md" onChange={handlePaginate}>
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
            </select>
          </div>
          <div className="w-1/3">
            {page > 1 ? (
              <Link href={`/anggota/${page - 1}`}>
                <button className="p-2 rounded-md bg-blue-500 text-white hover:bg-blue-900">
                  Previous
                </button>
              </Link>
            ) : (
              <button className="p-2 rounded-md bg-blue-500 text-white hover:bg-blue-900">
                Previous
              </button>
            )}
          </div>
          <div className="w-1/3">
            {anggotas.length === paginate ? (
              <Link href={`/anggota/${page + 1}`}>
                <button className="p-2 rounded-md bg-blue-500 text-white hover:bg-blue-900">
                  Next
                </button>
              </Link>
            ) : (
              <button className="p-2 rounded-md bg-blue-500 text-white hover:bg-blue-900">
                Next
              </button>
            )}
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
            {error && (
              <tr>
                <td colSpan={5} className="text-center">
                  Error: {error.message}
                </td>
              </tr>
            )}
            {loading && (
              <tr>
                <td colSpan={5} className="text-center">
                  Loading...
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
                <td className="px-6 py-4">{anggota?.telp}</td>
                <td className="px-6 py-4">
                  <Link
                    href={`/anggota/edit/${anggota?.id}`}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="w-full flex justify-center mt-4"></div>
      </div>
    </>
  );
};

export default TabelAnggota;
