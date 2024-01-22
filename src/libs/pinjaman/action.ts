import prisma from "../prisma";

export const getPinjaman = async () => {
  const pinjamans = await prisma.credit.findMany();
  return pinjamans;
};

export const tambahPinjaman = async (pinjaman: any) => {
  try {
    const newPinjaman = await prisma.credit.create({
      data: {
        ...pinjaman,
        createdAt: new Date().toISOString().toLowerCase(),
        updatedAt: new Date(),
      },
    });
    return newPinjaman;
  } catch (error: any) {
    throw new Error(error);
  }
};
