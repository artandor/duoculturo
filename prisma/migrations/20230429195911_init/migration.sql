-- CreateTable
CREATE TABLE ` Answer `
(
    `
    id
    `
    INTEGER
    NOT
    NULL
    AUTO_INCREMENT,
    `
    createdAt
    `
    DATETIME
(
    3
) NOT NULL DEFAULT CURRENT_TIMESTAMP
(
    3
),
    ` title ` VARCHAR
(
    255
) NOT NULL,
    ` isCorrect ` BOOLEAN NOT NULL DEFAULT false,
    ` questionId ` INTEGER NULL,
    PRIMARY KEY
(
    `id`
)
    ) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE ` Question `
(
    `
    id
    `
    INTEGER
    NOT
    NULL
    AUTO_INCREMENT,
    `
    title
    `
    MEDIUMTEXT
    NOT
    NULL,
    `
    multiple
    `
    BOOLEAN
    NOT
    NULL
    DEFAULT
    false,
    `
    quizzId
    `
    INTEGER
    NULL,
    `
    themeId
    `
    INTEGER
    NOT
    NULL,

    PRIMARY
    KEY
(
    `
    id
    `
)
    ) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE ` Theme `
(
    `
    id
    `
    INTEGER
    NOT
    NULL
    AUTO_INCREMENT,
    `
    name
    `
    VARCHAR
(
    255
) NOT NULL,
    ` slug ` VARCHAR
(
    191
) NOT NULL,
    UNIQUE INDEX ` Theme_name_key `
(
    `name`
),
    UNIQUE INDEX ` Theme_slug_key `
(
    `slug`
),
    PRIMARY KEY
(
    `id`
)
    ) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE ` Quizz `
(
    `
    id
    `
    INTEGER
    NOT
    NULL
    AUTO_INCREMENT,

    PRIMARY
    KEY
(
    `
    id
    `
)
    ) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
