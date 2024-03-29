import Link from "next/link";
import React from "react";
import { authUserSession } from "@/libs/userSession";
import {
  FaCartShopping,
  FaUser,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa6";
import { signIn, signOut } from "next-auth/react";

const NavBar = async () => {
  const user = await authUserSession();

  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link href="/" className="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Koperasi 123
          </span>
        </Link>

        <div className="flex items-center md:order-2">
          <button
            type="button"
            className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            <FaCartShopping />
          </button>
          {user ? (
            <Link
              href="/api/auth/signout"
              className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              <FaArrowRight />
            </Link>
          ) : (
            <Link
              href="/api/auth/signin"
              className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              <FaArrowLeft />
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
