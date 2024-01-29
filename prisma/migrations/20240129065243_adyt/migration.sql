-- AlterTable
ALTER TABLE "User" ADD COLUMN     "transaksiId" TEXT;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_transaksiId_fkey" FOREIGN KEY ("transaksiId") REFERENCES "Transaksi"("id") ON DELETE SET NULL ON UPDATE CASCADE;
