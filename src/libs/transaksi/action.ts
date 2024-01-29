"use server";
import prisma from "../prisma";

export const getTransaksi = async () => {
  const transaksis = await prisma.transaksi.findMany();
  return transaksis;
};

export const tambahTransaksi = async (transaksi: any) => {
  try {
    const newTransaksi = await prisma.transaksi.create({
      data: {
        ...transaksi,
        transaksiDate: new Date(),
      },
    });
    return newTransaksi;
  } catch (error: any) {
    throw new Error(error);
  }
};
