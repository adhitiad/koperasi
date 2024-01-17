import React from "react";

const Register = () => {
  const handleSubmit = async (formData: FormData) => {
    "use server";
    const data = Object.fromEntries(formData);
    const form = {
      ...data,
      role: data.role || "USER" || "ADMIN" || "SUPERADMIN" || "KASIR",
      isActive: data.isActive === "on" ? true : false,
    };
    const response = await fetch("http://localhost:3000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    const result = await response.json();
    console.log(result);
  };
  return (
    <>
      <div className="container mx-auto">
        <div className="flex justify-center px-6 my-12">
          <div className="w-full xl:w-3/4 lg:w-11/12 flex">
            <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
              <h3 className="pt-4 text-2xl text-center">Create an Account!</h3>
              <form
                action={handleSubmit}
                className="px-8 pt-6 pb-8 mb-4 bg-white"
              >
                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="name"
                      name="name"
                      type="text"
                      placeholder="First Name"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="role"
                  >
                    Role
                  </label>
                  <select className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-100 border rounded shadow appearance-none focus:outline-none focus:shadow-outline">
                    <option value="USER">User</option>
                    <option value="ADMIN">Admin</option>
                    <option value="SUPERADMIN">Superadmin</option>
                    <option value="KASIR">Kasir</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                  />
                </div>
                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="password"
                      name="password"
                      type="password"
                      placeholder="******************"
                    />
                    <p className="text-xs italic text-red-500">
                      Please choose a password.
                    </p>
                  </div>
                  <div className="md:ml-2">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="c_password"
                    >
                      Confirm Password
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="c_password"
                      type="password"
                      placeholder="******************"
                    />
                  </div>
                </div>
                <div className="mb-3 ">
                  <label
                    className="inline-block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="isActive"
                  >
                    Is Active
                  </label>
                  <input
                    type="radio"
                    name="isActive"
                    value="true"
                    id="isActive"
                    checked
                    className="ml-1 radio radio-secondary radio-sm focus:outline-none"
                  />
                  <label
                    className="inline-block ml-1 text-sm font-bold text-gray-700"
                    htmlFor="isActive"
                  >
                    Yes
                  </label>
                </div>
                <div className="mb-6 text-center">
                  <button
                    className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Register Account
                  </button>
                </div>
                <hr className="mb-6 border-t" />
                <div className="text-center">
                  <a
                    className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                    href="#"
                  >
                    Forgot Password?
                  </a>
                </div>
                <div className="text-center">
                  <a
                    className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                    href="#"
                  >
                    Already have an account? Login!
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
