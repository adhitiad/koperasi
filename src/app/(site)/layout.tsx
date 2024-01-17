import React from "react";
import SideBar from "@/components/SideBar";
import { authUserSession } from "@/libs/userSession";
import Link from "next/link";

const layout = async ({ children }: { children: React.ReactNode }) => {
  const session = await authUserSession();

  if (!session) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Link href="/api/auth/signin">
          <button className="btn btn-primary">Login</button>
        </Link>
      </div>
    );
  }

  return (
    <>
      <SideBar>{children}</SideBar>
    </>
  );
};

export default layout;
