"use client";

import { tambahAnggota } from "@/libs/anggota/action";
import { Role } from "@prisma/client";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React from "react";

const FormAnggota = () => {
  const router = useRouter();
  const {
    mutate: tambah,
    isError,
    error,
    isSuccess,
  } = useMutation({
    mutationFn: (data: any) => {
      const newData = {
        name: data.name,
        email: data.email,
        username: data.username,
        alamat: data.alamat,
        desa: data.desa,
        kecamatan: data.kecamatan,
        kota: data.kota,
        provinsi: data.provinsi,
        kodePos: data.kodePos,
        tglLahir: data.tglLahir,
        tempatLahir: data.tempatLahir,
        pendidikan: data.pendidikan,
        pekerjaan: data.pekerjaan,
        agama: data.agama,
        gender: data.gender,
        status: data.status,
        pendapatan: data.pendapatan,
        noRek: data.noRek,
        bank: data.bank,
        cabang: data.cabang,
        noKtp: data.noKtp,
        noKk: data.noKk,
        noNpwp: data.noNpwp,
        noTelp: data.noTelp,
        noHp: data.noHp,
        role: data.role,
        password: data.password,
        createdAt: data.createdAt || new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        deletedAt: new Date().toISOString(),
        deletedReason: "",
        deleted: false,
      };

      return tambahAnggota(newData);
    },
  });

  const handleSubmit = (formData: FormData) => {
    const data = Object.fromEntries(formData);
    const form = { ...data };
    tambah(form);
  };

  if (isSuccess) {
    return router.push("/anggota");
  }

  if (isError) {
    return <div>{error?.message}</div>;
  }

  return (
    <>
      <form
        action={handleSubmit}
        className="w-full grid grid-cols-4 gap-4 py-8"
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="alamat"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Address
          </label>
          <input
            type="text"
            id="alamat"
            name="alamat"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="desa"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Desa/Kelurahan
          </label>
          <input
            type="text"
            id="desa"
            name="desa"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="kecamatan"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Kecamatan
          </label>
          <input
            type="text"
            id="kecamatan"
            name="kecamatan"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="kota"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Kota
          </label>
          <input
            type="text"
            id="kota"
            name="kota"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="provinsi"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Provinsi
          </label>
          <input
            type="text"
            id="provinsi"
            name="provinsi"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <label className="text-red-500 text-xs italic">kode pos</label>
          <input
            type="text"
            id="kodePos"
            name="kodePos"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="tempatLahir"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Tempat Lahir
          </label>
          <input
            type="text"
            id="tempatLahir"
            name="tempatLahir"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="pendidikan"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Pendidikan
          </label>

          <select
            id="pendidikan"
            name="pendidikan"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="SD">SD</option>
            <option value="SMP">SMP</option>
            <option value="SMA">SMA</option>
            <option value="D3">D1</option>
            <option value="S1">S1</option>
            <option value="S2">S2</option>
            <option value="S3">S3</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="pekerjaan"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Pekerjaan
          </label>
          <input
            type="text"
            id="pekerjaan"
            name="pekerjaan"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="agama"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Agama
          </label>
          <select
            id="agama"
            name="agama"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="Islam">Islam</option>
            <option value="Kristen">Kristen</option>
            <option value="Katolik">Katolik</option>
            <option value="Hindu">Hindu</option>
            <option value="Budha">Budha</option>
            <option value="Konghucu">Konghucu</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="gender"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Gender
          </label>
          <select
            id="gender"
            name="gender"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="Laki-laki">Laki-laki</option>
            <option value="Perempuan">Perempuan</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="status"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Status Pernikahan
          </label>
          <select
            id="status"
            name="status"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="Menikah">Menikah</option>
            <option value="Belum Menikah">Belum Menikah</option>
            <option value="Duda/Janda">Duda/Janda</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="pendapatan"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Pendapatan
          </label>
          <select
            id="pendapatan"
            name="pendapatan"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="Tidak Ada">Tidak Ada</option>
            <option value="Kurang dari 1jt">Kurang dari 1jt</option>
            <option value="Kurang dari 2jt">Kurang dari 2jt</option>
            <option value="Kurang dari 3jt">Kurang dari 3jt</option>
            <option value="Lebih dari 3jt">Lebih dari 3jt</option>
          </select>
        </div>

        <div className="mb-4">
          <label
            htmlFor="noRek"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Nomor Rekening
          </label>
          <input
            type="text"
            id="noRek"
            name="noRek"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="bank"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Bank
          </label>
          <select
            id="bank"
            name="bank"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="BCA">BCA</option>
            <option value="Mandiri">Mandiri</option>
            <option value="BNI">BNI</option>
            <option value="BRI">BRI</option>
            <option value="CIMB">CIMB</option>
            <option value="Danamon">Danamon</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="cabang"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Cabang
          </label>
          <input
            type="text"
            id="cabang"
            name="cabang"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="noKtp"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Nomor KTP
          </label>
          <input
            type="text"
            id="noKtp"
            name="noKtp"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="noKk"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Nomor KK
          </label>
          <input
            type="text"
            id="noKk"
            name="noKk"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="noNpwp"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Nomor NPWP
          </label>
          <input
            type="text"
            id="noNpwp"
            name="noNpwp"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="noTelp"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Nomor Telepon
          </label>
          <input
            type="text"
            id="noTelp"
            name="noTelp"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="noHp"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Nomor HP
          </label>
          <input
            type="text"
            id="noHp"
            name="noHp"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="noReferensi"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Nomor Referensi
          </label>
          <input
            type="text"
            id="noReferensi"
            name="noReferensi"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="role"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Role
          </label>
          <select
            id="role"
            name="role"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value={Role.ADMIN}>Admin</option>
            <option value={Role.KASIR}>Kasir</option>
            <option value={Role.SUPERADMIN}> Superadmin</option>
            <option value={Role.USER}>User</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Tgl. Lahir
          </label>
          <input
            type="date"
            id="tglLahir"
            name="tglLahir"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default FormAnggota;
