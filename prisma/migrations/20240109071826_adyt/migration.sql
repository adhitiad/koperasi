/*
  Warnings:

  - You are about to drop the column `userId` on the `Anggota` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Anggota" DROP CONSTRAINT "Anggota_userId_fkey";

-- AlterTable
ALTER TABLE "Anggota" DROP COLUMN "userId";
