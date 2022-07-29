-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "pseudo" VARCHAR(150) NOT NULL,
    "password" VARCHAR(150) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Perk" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(150) NOT NULL,
    "stats" VARCHAR(255) NOT NULL,

    CONSTRAINT "Perk_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Slot" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(150) NOT NULL,

    CONSTRAINT "Slot_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Equipment" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(150) NOT NULL,
    "slotId" INTEGER NOT NULL,
    "equipmentTypeId" INTEGER NOT NULL,

    CONSTRAINT "Equipment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EquipmentType" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(150) NOT NULL,

    CONSTRAINT "EquipmentType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_EquipmentToPerk" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_EquipmentTypeToPerk" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_EquipmentTypeToSlot" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_pseudo_key" ON "User"("pseudo");

-- CreateIndex
CREATE UNIQUE INDEX "Perk_name_key" ON "Perk"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Slot_name_key" ON "Slot"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Equipment_name_key" ON "Equipment"("name");

-- CreateIndex
CREATE UNIQUE INDEX "EquipmentType_name_key" ON "EquipmentType"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_EquipmentToPerk_AB_unique" ON "_EquipmentToPerk"("A", "B");

-- CreateIndex
CREATE INDEX "_EquipmentToPerk_B_index" ON "_EquipmentToPerk"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_EquipmentTypeToPerk_AB_unique" ON "_EquipmentTypeToPerk"("A", "B");

-- CreateIndex
CREATE INDEX "_EquipmentTypeToPerk_B_index" ON "_EquipmentTypeToPerk"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_EquipmentTypeToSlot_AB_unique" ON "_EquipmentTypeToSlot"("A", "B");

-- CreateIndex
CREATE INDEX "_EquipmentTypeToSlot_B_index" ON "_EquipmentTypeToSlot"("B");

-- AddForeignKey
ALTER TABLE "Equipment" ADD CONSTRAINT "Equipment_slotId_fkey" FOREIGN KEY ("slotId") REFERENCES "Slot"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Equipment" ADD CONSTRAINT "Equipment_equipmentTypeId_fkey" FOREIGN KEY ("equipmentTypeId") REFERENCES "EquipmentType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EquipmentToPerk" ADD CONSTRAINT "_EquipmentToPerk_A_fkey" FOREIGN KEY ("A") REFERENCES "Equipment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EquipmentToPerk" ADD CONSTRAINT "_EquipmentToPerk_B_fkey" FOREIGN KEY ("B") REFERENCES "Perk"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EquipmentTypeToPerk" ADD CONSTRAINT "_EquipmentTypeToPerk_A_fkey" FOREIGN KEY ("A") REFERENCES "EquipmentType"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EquipmentTypeToPerk" ADD CONSTRAINT "_EquipmentTypeToPerk_B_fkey" FOREIGN KEY ("B") REFERENCES "Perk"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EquipmentTypeToSlot" ADD CONSTRAINT "_EquipmentTypeToSlot_A_fkey" FOREIGN KEY ("A") REFERENCES "EquipmentType"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EquipmentTypeToSlot" ADD CONSTRAINT "_EquipmentTypeToSlot_B_fkey" FOREIGN KEY ("B") REFERENCES "Slot"("id") ON DELETE CASCADE ON UPDATE CASCADE;
