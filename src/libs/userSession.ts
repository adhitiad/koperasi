import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Role } from "@prisma/client";

export const authUserSession = async () => {
  const session = await getServerSession(authOptions as any);
  return session as any;
};
