"use server";
import React from "react";
import prisma from "../prisma";

export const getAnggota = async () => {
  const transaksis = await prisma.anggota.findMany();
  return transaksis;
};

export const getAnggotaById = async (id: string) => {
  const transaksi = await prisma.transaksi.findUnique({
    where: {
      id,
    },
  });
  return transaksi;
};

export const tambahAnggota = async (transaksi: any) => {
  try {
    const newTransaksi = await prisma.anggota.create({
      data: transaksi,
    });
    return newTransaksi;
  } catch (error: any) {
    throw new Error(error);
  }
};
