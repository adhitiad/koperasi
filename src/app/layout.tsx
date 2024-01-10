import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Redux from "./Redux";
import QueryProviders from "./QueryProviders";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Koperasi 123",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Redux>
          <QueryProviders>
            <NavBar />
            {children}
          </QueryProviders>
        </Redux>
      </body>
    </html>
  );
}
