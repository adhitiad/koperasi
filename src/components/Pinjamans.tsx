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

  const { data: pinjamans, isLoading } = useQuery({
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
      <div className="w-full bg-white rounded-xl p-10"></div>
    </>
  );
};

export default Pinjamans;
