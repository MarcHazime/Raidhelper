/*
  Warnings:

  - You are about to drop the column `stats` on the `perk` table. All the data in the column will be lost.
  - Added the required column `location` to the `Perk` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `perk` DROP COLUMN `stats`,
    ADD COLUMN `location` VARCHAR(255) NOT NULL;
