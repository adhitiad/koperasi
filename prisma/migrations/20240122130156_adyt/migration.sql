-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "creditId" TEXT;

-- CreateTable
CREATE TABLE "Credit" (
    "id" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "kegunaan" TEXT NOT NULL,
    "bunga" INTEGER NOT NULL,
    "tenor" INTEGER NOT NULL,
    "jatuhTempo" TIMESTAMP(3) NOT NULL,
    "totalBayar" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "anggotaId" TEXT,
    "transaksiId" TEXT,

    CONSTRAINT "Credit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Simpanan" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "anggotaId" TEXT,
    "transaksiId" TEXT,

    CONSTRAINT "Simpanan_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Credit_anggotaId_idx" ON "Credit"("anggotaId");

-- CreateIndex
CREATE INDEX "Credit_transaksiId_idx" ON "Credit"("transaksiId");

-- CreateIndex
CREATE INDEX "Simpanan_anggotaId_idx" ON "Simpanan"("anggotaId");

-- CreateIndex
CREATE INDEX "Simpanan_transaksiId_idx" ON "Simpanan"("transaksiId");

-- CreateIndex
CREATE INDEX "Account_userId_idx" ON "Account"("userId");

-- CreateIndex
CREATE INDEX "BukuBesar_transaksiId_idx" ON "BukuBesar"("transaksiId");

-- CreateIndex
CREATE INDEX "BukuBesar_anggotaId_idx" ON "BukuBesar"("anggotaId");

-- CreateIndex
CREATE INDEX "Cart_anggotaId_idx" ON "Cart"("anggotaId");

-- CreateIndex
CREATE INDEX "Order_transaksiId_idx" ON "Order"("transaksiId");

-- CreateIndex
CREATE INDEX "Order_anggotaId_idx" ON "Order"("anggotaId");

-- CreateIndex
CREATE INDEX "Order_creditId_idx" ON "Order"("creditId");

-- CreateIndex
CREATE INDEX "Product_orderId_idx" ON "Product"("orderId");

-- CreateIndex
CREATE INDEX "Product_cartId_idx" ON "Product"("cartId");

-- CreateIndex
CREATE INDEX "Product_transaksiId_idx" ON "Product"("transaksiId");

-- CreateIndex
CREATE INDEX "Product_bukuBesarId_idx" ON "Product"("bukuBesarId");

-- CreateIndex
CREATE INDEX "Session_userId_idx" ON "Session"("userId");

-- CreateIndex
CREATE INDEX "Transaksi_anggotaId_idx" ON "Transaksi"("anggotaId");

-- CreateIndex
CREATE INDEX "User_verificationTokenToken_idx" ON "User"("verificationTokenToken");

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_creditId_fkey" FOREIGN KEY ("creditId") REFERENCES "Credit"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Credit" ADD CONSTRAINT "Credit_anggotaId_fkey" FOREIGN KEY ("anggotaId") REFERENCES "Anggota"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Credit" ADD CONSTRAINT "Credit_transaksiId_fkey" FOREIGN KEY ("transaksiId") REFERENCES "Transaksi"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Simpanan" ADD CONSTRAINT "Simpanan_anggotaId_fkey" FOREIGN KEY ("anggotaId") REFERENCES "Anggota"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Simpanan" ADD CONSTRAINT "Simpanan_transaksiId_fkey" FOREIGN KEY ("transaksiId") REFERENCES "Transaksi"("id") ON DELETE SET NULL ON UPDATE CASCADE;
