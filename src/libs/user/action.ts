"use server";

import prisma from "../prisma";

export const getUser = async () => {
  const users = await prisma.user.findMany();
  return users;
};
