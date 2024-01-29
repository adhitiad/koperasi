"use client";
import { getAnggota } from "@/libs/anggota/action";
import { useQuery, useMutation } from "@tanstack/react-query";
import {
  getPinjaman,
  tambahPinjaman,
  hapusPinjaman,
} from "@/libs/pinjaman/action";
import React from "react";

interface Pinjaman {
  amount: number;
  description: string;
  kegunaan: string;
  bunga: number;
  anggotaId: string;
  tenor: number;
  jatuhTempo: Date;
  totalBayar: number;
}

const Pinjamans = () => {
  const {
    mutate: tambah,
    isError,
    error,
    isSuccess,
    status,
  } = useMutation({
    mutationFn: async (data: any) => {
      const dataPinjaman: Pinjaman = {
        amount: Number(data.amount),
        description: data.description,
        kegunaan: data.kegunaan,
        bunga: Number(data.bunga),
        anggotaId: data.anggotaId,
        tenor: Number(data.tenor),
        jatuhTempo: new Date(data.jatuhTempo),
        totalBayar:
          Number(data.amount) *
          (1 + Number(data.bunga) / 100) ** Number(data.tenor),
      };
      return tambahPinjaman(dataPinjaman as any);
    },
    onSuccess: (data: any) => {
      alert("Data Berhasil " + status + " Berhasil " + data);
    },

    onError: (data) => {
      alert("Data Tidak Berasil " + status + " " + data);
    },
  });

  const { data: anggotas } = useQuery({
    queryKey: ["anggotas"],
    queryFn: async () => {
      const data = await getAnggota();
      return data;
    },
  });

  const {
    data: pinjamans,
    isLoading,
    isError: isErrorPinjaman,
    isFetching,
  } = useQuery({
    queryKey: ["pinjamans"],
    queryFn: async () => {
      const data = await getPinjaman();
      return data;
    },
  });

  const handleFilter = async (e: any) => {
    const data = await getPinjaman();
    return data.filter((data: any) => {
      return data.name.match(e.target.value);
    });
  };

  const handleSubmit = async (formData: FormData) => {
    const data = Object.fromEntries(formData);
    const form = {
      ...data,
    };
    console.log(form);
    tambah(form);
  };

  const handleDelete = async (id: any) => {
    await hapusPinjaman(id);
    const res = await getPinjaman();
    alert(res + " Berhasil" + " Dihapus" + status);
    setTimeout(() => {
      window.location.reload();
    }, 800);
  };

  if (isSuccess) {
    setTimeout(() => {
      window.location.reload();
    }, 500);
  }

  return (
    <>
      <div className=" bg-white rounded-xl p-10">
        <form action={handleSubmit} className=" flex flex-col gap-4">
          <div className=" flex flex-col gap-4">
            <p className="text-xl font-bold">Pinjaman</p>
          </div>
          <div className="w-full flex flex-col gap-4">
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              className="input input-bordered w-full"
            />
            <input
              type="text"
              name="description"
              placeholder="Description"
              className="input input-bordered w-full"
            />
            <select name="anggotaId" className="select select-bordered w-full">
              {anggotas?.map((data: any) => (
                <option key={data.id} value={data.id}>
                  {data.name} - {data.email}
                </option>
              ))}
            </select>

            <select name="kegunaan" className="select select-bordered w-full">
              <option value="keperluan pendidikan">Keperluan Pendidikan</option>
              <option value="keperluan kesehatan">Keperluan Kesehatan</option>
              <option value="keperluan pribadi">Keperluan Pribadi</option>
              <option value="keperluan bisnis">Keperluan Bisnis</option>
            </select>
            <input
              type="number"
              name="bunga"
              placeholder="Bunga"
              className="input input-bordered w-full"
            />
            <select name="tenor" className="select select-bordered w-full">
              <option value="1">1 Bulan</option>
              <option value="3">3 Bulan</option>
              <option value="6">6 Bulan</option>
              <option value="12">12 Bulan</option>
              <option value="24">24 Bulan</option>
              <option value="36">36 Bulan</option>
            </select>
            <input
              type="date"
              name="jatuhTempo"
              placeholder="Jatuh Tempo"
              className="input input-bordered w-full"
            />
          </div>
          <div className="w-full flex justify-end">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
        <div className="w-full flex flex-col gap-4">
          <p className="text-xl font-bold">Pinjaman</p>
          <div className="w-full flex flex-col gap-4">
            <table className="table w-full mt-4">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Amount</th>
                  <th>Kegunaan</th>
                  <th>Bunga</th>
                  <th>Tenor</th>
                  <th>Jatuh Tempo</th>
                  <th>Total Bayar</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {isErrorPinjaman && (
                  <tr>
                    <td colSpan={8}>Error : {isErrorPinjaman}</td>{" "}
                  </tr>
                )}

                {isFetching && (
                  <tr>
                    <td colSpan={8} className="text-center">
                      <div className="justify-center flex">
                        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin"></div>
                      </div>
                    </td>
                  </tr>
                )}
                {isLoading && (
                  <tr>
                    <td colSpan={8} className="text-center">
                      <div className="justify-center flex">
                        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin"></div>
                      </div>
                    </td>
                  </tr>
                )}
                {pinjamans?.map((data: any, index: number) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      Rp.{" "}
                      {data.amount
                        .toLocaleString("id-ID")
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                        .replace("-", "")}
                    </td>

                    <td>{data.kegunaan}</td>
                    <td>{data.bunga}</td>
                    <td>{data.tenor}</td>
                    <td>{data.jatuhTempo.toLocaleDateString()}</td>
                    <td>
                      Rp.
                      {data.totalBayar
                        .toLocaleString("id-ID")
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </td>
                    <td>
                      <button
                        className="btn btn-primary btn-sm"
                        onClick={() => handleDelete(data.id)}
                      >
                        Hapus
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pinjamans;
