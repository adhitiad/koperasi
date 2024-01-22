import { getServerSession } from "next-auth";
import { Role } from "@prisma/client";

export const authUserSession = async () => {
  const session = await getServerSession();
  return session as any;
};
