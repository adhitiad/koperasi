import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      <h1 className="text-3xl font-bold underline text-white">
        Welcome to Koperasi
      </h1>
      <Link href="/dashboard" className="text-white btn btn-info">
        Dashboard
      </Link>
    </div>
  );
}
