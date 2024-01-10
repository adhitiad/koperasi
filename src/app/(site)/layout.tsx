"use client";
import React from "react";
import SideBar from "@/components/SideBar";
import ServerSesion from "@/libs/ServerSesion";
import Link from "next/link";
import { signIn } from "next-auth/react";
const layout = async ({ children }: { children: React.ReactNode }) => {
  const session = await ServerSesion();

  if (!session) {
    return (
      <div className="text-center">
        <h1 className="text-3xl font-bold">Please Login</h1>
        <Link
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-900"
          href="/api/auth/signin"
        >
          Login
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
