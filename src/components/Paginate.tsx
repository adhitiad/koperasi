import { getAnggota } from "@/libs/anggota/action";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import React from "react";

const Paginate = () => {
  return (
    <>
      <div className="flex justify-center items-center my-4">
        <div className="flex flex-wrap gap-4">
          <Link href="/anggota" className="hover:bg-gray-200 p-2 rounded-md">
            1
          </Link>
          <Link href="/anggota" className="hover:bg-gray-200 p-2 rounded-md">
            2
          </Link>
          <Link href="/anggota" className="hover:bg-gray-200 p-2 rounded-md">
            3
          </Link>
          <Link href="/anggota" className="hover:bg-gray-200 p-2 rounded-md">
            4
          </Link>
          <Link href="/anggota" className="hover:bg-gray-200 p-2 rounded-md">
            5
          </Link>
          <Link href="/anggota" className="hover:bg-gray-200 p-2 rounded-md">
            6
          </Link>
        </div>
      </div>
    </>
  );
};

export default Paginate;
