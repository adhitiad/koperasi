import React from "react";
import Image from "next/image";

const KasirtList = ({ results, addToCart }: any) => {
  return (
    <>
      <div className="rounded-lg md:w-2/3">
        <div className="h-full bg-white shadow rounded-lg p-6">
          {/* <ProductList /> */}
          <div className="flex flex-col gap-6">
            {results.map((result: any) => (
              <div
                key={result.id}
                className="flex flex-col gap-3 rounded-lg bg-white p-6 shadow-md"
              >
                <p className="text-xl font-bold">{result.kegunaan}</p>
                <p className="text-lg font-bold">{result.description}</p>
                <p className="text-lg font-bold">
                  Rp. {result.totalBayar.toLocaleString("id-ID")}
                </p>
                <p className="text-lg font-bold">{result.anggotaId}</p>
                <p className="text-lg font-bold">
                  {result.jatuhTempo.toLocaleDateString()}
                </p>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => addToCart(result)}
                >
                  Bayar
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default KasirtList;
