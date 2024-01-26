"use server";
import prisma from "../prisma";

export const getPinjaman = async () => {
  const pinjamans = await prisma.credit.findMany({});
  return pinjamans;
};

export const tambahPinjaman = async (pinjaman: any) => {
  try {
    const newPinjaman = await prisma.credit.create({
      data: pinjaman,
    });
    return newPinjaman;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const hapusPinjaman = async (id: string) => {
  try {
    const newPinjaman = await prisma.credit.delete({
      where: {
        id,
      },
    });
    return newPinjaman;
  } catch (error: any) {
    throw new Error(error);
  }
};
