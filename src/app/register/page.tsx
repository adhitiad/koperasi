"use client";
import { Role } from "@prisma/client";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "next-auth/react";
import Link from "next/link";
import React from "react";

const Register = () => {
  const {
    mutate: register,
    isError,
    error,
    isSuccess,
    status,
    isPending,
    data,
  } = useMutation({
    mutationFn: async (data: any) => {
      const dataUser: any = {
        name: data.name,
        email: data.email,
        password: data.password,
        role: Role.USER,
      };

      return await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataUser),
      });
    },
  });

  if (isSuccess) {
    return (
      <p>
        Success register. Please login now{" "}
        <Link href="/api/auth/signin" className="btn btn-primary">
          Login
        </Link>
      </p>
    );
  }

  if (isError) {
    return <p>{error.message + " " + error.stack}</p>;
  }

  return (
    <>
      <div className="w-full h-screen flex items-center justify-center">
        <div className="w-1/3">
          <h1 className="text-3xl font-bold text-gray-900 text-center mt-4">
            Register
          </h1>
          <p className="text-center text-gray-900 mt-4">Register new Account</p>
          <div className="flex justify-center my-4">
            <div className="card w-[750px] bg-base-100 shadow-xl">
              <div className="card-body">
                <form onSubmit={register}>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="name"
                      name="name"
                      id="name"
                      className="input input-bordered input-lg input-info"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      placeholder="email"
                      name="email"
                      id="email"
                      className="input input-bordered input-lg input-info"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      {" "}
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type="password"
                      placeholder="password"
                      name="password"
                      id="password"
                      className="input input-bordered input-lg input-info"
                    />
                  </div>
                  <div className="form-control mt-6">
                    <button type="submit" className="btn btn-primary">
                      Register
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
