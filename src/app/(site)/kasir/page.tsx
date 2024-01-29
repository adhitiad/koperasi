"use client";

import KasirtList from "@/components/KasirtList";
import { useCartSlice } from "@/libs/cartSlice";
import { getPinjaman } from "@/libs/pinjaman/action";
import { useSearchSlice } from "@/libs/searchSlice";
import { useQuery } from "@tanstack/react-query";
import Fuse from "fuse.js";

// TODO: kasir page here
export default function Kasir() {
  const search = useSearchSlice((state: any) => state.search);
  const setSearchTerm = useSearchSlice((state: any) => state.setSearch);
  const cart = useCartSlice((state: any) => state.cart);
  const setCart = useCartSlice((state: any) => state.setCart);

  const setSearch = (search: string) => {
    setSearchTerm(search);
  };

  const addToCart = (pinjaman: any) => {
    setCart([...cart, pinjaman]);
  };

  const kasirCalculate = () => {
    // Implementasi kasir calculate
    let total = 0;

    cart.forEach((pinjaman: any) => {
      total += pinjaman.totalBayar;
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["pinjaman"],
    queryFn: async () => {
      const data = await getPinjaman();
      return data;
    },
  });

  const searchTerm = useSearchSlice((state: any) => state.search as string);

  // Pastikan data telah diambil dan hasil pencarian memiliki properti 'item'
  const results = data
    ? new Fuse(data as any, {
        keys: [
          "kegunaan",
          "anggotaId",
          "jatuhTempo",
          "description",
          "bunga",
          "tenor",
          "amount",
          "totalBayar",
        ],
      })
        .search(searchTerm)
        .map((result: any) => (result.item ? result.item : null))
    : [];

  if (isLoading) {
    return (
      <div className="flex items-center justify-center text-2xl font-bold">
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-slate-200 dark:border-slate-600 h-12 w-12"></div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex items-center justify-center text-2xl font-bold">
        Error + {error as any}
      </div>
    );
  }

  console.log(cart);
  const biayaAdmin = 0.01;
  const kasir = cart.reduce(
    (total: any, item: { totalBayar: any }) => total + item.totalBayar,
    0
  );

  const totalBayar = kasir + kasir * biayaAdmin;

  return (
    <>
      <div className="h-full bg-gray-100 pt-20">
        <h1 className="mb-3 text-center text-2xl font-bold">Cart Items</h1>
        <div className="flex items-center justify-center my-3">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            name="search"
            autoComplete="off"
            id="search"
            className="input input-bordered input-sm"
          />

          <button className="btn btn-sm btn-primary ml-2">Search</button>
        </div>
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <KasirtList results={results} addToCart={addToCart} />

          <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
            <p className="text-xl font-bold">Total Bayar</p>
            {cart.map((item: any) => (
              <div key={item.id} className="flex justify-between border-b py-2">
                <p className="text-gray-700">Subtotal</p>
                <p className="text-gray-700">{item.kegunaan}</p>
                <p className="text-gray-700">
                  Rp. {item.totalBayar.toLocaleString("id-ID")}
                </p>
              </div>
            ))}

            <div className="flex justify-between">
              <p className="text-gray-700">Pajak</p>
              <p className="text-gray-700">Rp. 0</p>
            </div>
            <div className="flex justify-between">
              <p className="text-lg font-bold text-gray-300">Biaya Admin 1%</p>
              <p className="text-lg font-bold text-gray-300">
                Rp. {(kasir * biayaAdmin).toLocaleString("id-ID")}
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-lg font-bold text-gray-300">Asuransi</p>
              <p className="text-lg font-bold">Rp. 0</p>
            </div>
            <div className="flex justify-between">
              <p className="text-lg font-bold"> Potongan Angsuran 1 </p>
              <p className="text-lg font-bold">Rp. 0</p>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between">
              <p className="text-lg font-bold">Diskon </p>
              <p className="text-lg font-bold">Rp. 0</p>
            </div>

            <hr className="my-4" />
            <div className="flex justify-between">
              <p className="text-lg font-bold text-gray-700">Total</p>
              <div className="">
                <p className="mb-1 text-lg font-bold text-gray-700">
                  Rp. {totalBayar.toLocaleString("id-ID")}
                </p>
                <p className="text-sm text-gray-700">including VAT</p>
              </div>
            </div>
            <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
              Check out
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

const product = {
  id: 1,
  name: "Keranjang",
  price: 3000000000,
  image:
    "https://images.unsplash.com/photo-1682687982360-3fbab65f9d50?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};
