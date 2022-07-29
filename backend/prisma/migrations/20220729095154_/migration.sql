-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pseudo` VARCHAR(150) NOT NULL,
    `password` VARCHAR(150) NOT NULL,

    UNIQUE INDEX `User_pseudo_key`(`pseudo`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Perk` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(150) NOT NULL,
    `stats` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `Perk_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Slot` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(150) NOT NULL,

    UNIQUE INDEX `Slot_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Equipment` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(150) NOT NULL,
    `slotId` INTEGER NOT NULL,
    `equipmentTypeId` INTEGER NOT NULL,

    UNIQUE INDEX `Equipment_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `EquipmentType` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(150) NOT NULL,

    UNIQUE INDEX `EquipmentType_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_EquipmentToPerk` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_EquipmentToPerk_AB_unique`(`A`, `B`),
    INDEX `_EquipmentToPerk_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_EquipmentTypeToPerk` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_EquipmentTypeToPerk_AB_unique`(`A`, `B`),
    INDEX `_EquipmentTypeToPerk_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_EquipmentTypeToSlot` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_EquipmentTypeToSlot_AB_unique`(`A`, `B`),
    INDEX `_EquipmentTypeToSlot_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Equipment` ADD CONSTRAINT `Equipment_slotId_fkey` FOREIGN KEY (`slotId`) REFERENCES `Slot`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Equipment` ADD CONSTRAINT `Equipment_equipmentTypeId_fkey` FOREIGN KEY (`equipmentTypeId`) REFERENCES `EquipmentType`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_EquipmentToPerk` ADD CONSTRAINT `_EquipmentToPerk_A_fkey` FOREIGN KEY (`A`) REFERENCES `Equipment`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_EquipmentToPerk` ADD CONSTRAINT `_EquipmentToPerk_B_fkey` FOREIGN KEY (`B`) REFERENCES `Perk`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_EquipmentTypeToPerk` ADD CONSTRAINT `_EquipmentTypeToPerk_A_fkey` FOREIGN KEY (`A`) REFERENCES `EquipmentType`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_EquipmentTypeToPerk` ADD CONSTRAINT `_EquipmentTypeToPerk_B_fkey` FOREIGN KEY (`B`) REFERENCES `Perk`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_EquipmentTypeToSlot` ADD CONSTRAINT `_EquipmentTypeToSlot_A_fkey` FOREIGN KEY (`A`) REFERENCES `EquipmentType`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_EquipmentTypeToSlot` ADD CONSTRAINT `_EquipmentTypeToSlot_B_fkey` FOREIGN KEY (`B`) REFERENCES `Slot`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
