/*
  Warnings:

  - You are about to drop the column `userId` on the `TodoItem` table. All the data in the column will be lost.
  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "TodoItem" DROP CONSTRAINT "TodoItem_userId_fkey";

-- AlterTable
ALTER TABLE "TodoItem" DROP COLUMN "userId";

-- DropTable
DROP TABLE "users";
