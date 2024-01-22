import { getServerSession } from "next-auth";
import { authOption } from "@/app/api/auth/[...nextauth]/route";
import { Role } from "@prisma/client";

export const authUserSession = async () => {
  const session = await getServerSession(authOption as any);
  return session as any;
};
