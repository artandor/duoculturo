/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `Theme` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `Theme` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE ` Theme ` ADD COLUMN ` slug ` VARCHAR (191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX ` Theme_slug_key ` ON ` Theme `(` slug `);
