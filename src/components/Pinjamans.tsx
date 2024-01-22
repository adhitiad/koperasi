"use client";
import { getAnggota } from "@/libs/anggota/action";
import { getPinjaman, tambahPinjaman } from "@/libs/pinjaman/action";
import { useRouter } from "next/navigation";
import { useQuery, useMutation } from "@tanstack/react-query";
import React from "react";

interface Pinjaman {
  amount: number;
  description: string;
  kegunaan: string;
  bunga: number;
  tenor: number;
  jatuhTempo: Date;
  totalBayar: number;
}

const Pinjamans = () => {
  const router = useRouter();

  const {
    data: pinjamans,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["pinjamans"],
    queryFn: async () => {
      const data = await getPinjaman();
      return data;
    },
  });

  const {
    mutate: tambah,
    isError,
    error,
    isSuccess,
    status,
    reset,
  } = useMutation({
    mutationFn: (data: any) => {
      const dataPinjaman: Pinjaman = {
        amount: data.amount,
        description: data.description,
        kegunaan: data.kegunaan,
        bunga: data.bunga,
        tenor: data.tenor,
        jatuhTempo: data.jatuhTempo,
        totalBayar: data.totalBayar,
      };
      return tambahPinjaman(dataPinjaman);
    },
    onSuccess: () => {
      reset();
      router.push("/pinjamans");
    },
    onError: (err: any) => {
      return alert("Something went wrong");
    },

    onMutate: () => {
      return {
        previousPinjamans: pinjamans,
      };
    },
  });

  return (
    <>
      <div className="w-full bg-white rounded-xl p-10">
        <form action={tambah} className="w-full flex flex-col gap-4">
          <div className="w-full flex flex-col gap-4">
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
            <input
              type="text"
              name="kegunaan"
              placeholder="Kegunaan"
              className="input input-bordered w-full"
            />
            <input
              type="number"
              name="bunga"
              placeholder="Bunga"
              className="input input-bordered w-full"
            />{" "}
            <input
              type="number"
              name="tenor"
              placeholder="Tenor"
              className="input input-bordered w-full"
            />
            <input
              type="date"
              name="jatuhTempo"
              placeholder="Jatuh Tempo"
              className="input input-bordered w-full"
            />
            <input
              type="number"
              name="totalBayar"
              placeholder="Total Bayar"
              className="input input-bordered w-full"
            />
          </div>
          <div className="w-full flex justify-end">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Pinjamans;
