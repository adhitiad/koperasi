import React from "react";
import { exportToExcel } from "@/utils/exportXls";
import { faker } from "@faker-js/faker";

export default function BukuBesar() {
  const handleExportToExcel = () => {
    exportToExcel("Buku_Besar", "Buku_Besar");
  };

  const generateData = () => {
    const data = [];
    for (let i = 0; i < 100; i++) {
      data.push({
        no: i + 1,
        account: faker.finance.accountName(),
        debit: faker.finance.amount(),
        credit: faker.finance.amount().replace("-", ""),
        description: faker.lorem.sentence(),
        balance: faker.finance.amount(),
      });
    }
    return data;
  };

  const data = generateData();

  return (
    <>
      <div className="bg-gradient-to-b from-[#2e026d] to-[#15162c] min-h-screen">
        <div className="flex justify-center items-center h-full">
          <p className="text-3xl font-bold text-white text-center">
            Buku Besar
          </p>
          <p className="text-white text-center">List of Buku Besar</p>
        </div>
        <table className="table w-full mt-4">
          <thead>
            <tr>
              <th>No</th>
              <th>Account</th>
              <th>Debit</th>
              <th>Credit</th>
              <th>Description</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item: any, index: any) => (
              <tr key={index}>
                <td>{item.no}</td>
                <td>{item.account}</td>
                <td>{item.debit}</td>
                <td>{item.credit}</td>
                <td>{item.description}</td>
                <td>{item.balance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
