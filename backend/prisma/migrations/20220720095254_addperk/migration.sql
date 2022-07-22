-- CreateTable
CREATE TABLE `Perk` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(150) NOT NULL,
    `stats` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `Perk_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
