import Link from "next/link";
import React from "react";

const SideBarLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <Link href={href} className="btn btn-ghost normal-case text-xl">
      {children}
    </Link>
  );
};

const SideBar = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          {children}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            <li className="mb-2">
              <SideBarLink href="/dashboard">Dashboard</SideBarLink>
              <SideBarLink href="/transaksi">Transaksi</SideBarLink>
              <SideBarLink href="/laporan">Laporan</SideBarLink>
              <SideBarLink href="/anggota">Anggota</SideBarLink>
              <SideBarLink href="/pinjaman">Pinjaman</SideBarLink>
              <SideBarLink href="/simpanan">Simpanan</SideBarLink>
              <SideBarLink href="/bukubsr">Buku Besar</SideBarLink>
              <SideBarLink href="/rekap">Rekap</SideBarLink>
              <SideBarLink href="/anggaran">Anggaran</SideBarLink>
              <SideBarLink href="/pengelolaan">Pengelolaan</SideBarLink>
              <SideBarLink href="/akun">Akun</SideBarLink>
              <SideBarLink href="/pengaturan">Pengaturan</SideBarLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideBar;
