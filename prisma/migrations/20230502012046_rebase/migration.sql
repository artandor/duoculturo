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

-- CreateTable
CREATE TABLE ` QuizzUser `
(
    `createdAt` DATETIME
(
    3
) NOT NULL DEFAULT CURRENT_TIMESTAMP
(
    3
),
    ` updatedAt ` DATETIME
(
    3
) NULL,
    ` score ` INTEGER NOT NULL DEFAULT -1,
    ` lastEndedQuestion ` INTEGER NULL,
    ` userId ` VARCHAR
(
    191
) NOT NULL,
    ` quizzId ` INTEGER NOT NULL,
    PRIMARY KEY
(
    `
    userId
    `,
    `
    quizzId
    `
)
    ) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE ` Account `
(
    `id` VARCHAR
(
    191
) NOT NULL,
    ` userId ` VARCHAR
(
    191
) NOT NULL,
    ` type ` VARCHAR
(
    191
) NOT NULL,
    ` provider ` VARCHAR
(
    191
) NOT NULL,
    ` providerAccountId ` VARCHAR
(
    191
) NOT NULL,
    ` refresh_token ` TEXT NULL,
    ` access_token ` TEXT NULL,
    ` expires_at ` INTEGER NULL,
    ` token_type ` VARCHAR
(
    191
) NULL,
    ` scope ` VARCHAR
(
    191
) NULL,
    ` id_token ` TEXT NULL,
    ` session_state ` VARCHAR
(
    191
) NULL,
    UNIQUE INDEX ` Account_provider_providerAccountId_key `
(
    `
    provider
    `,
    `
    providerAccountId
    `
),
    PRIMARY KEY
(
    `id`
)
    ) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE ` Session `
(
    `id` VARCHAR
(
    191
) NOT NULL,
    ` sessionToken ` VARCHAR
(
    191
) NOT NULL,
    ` userId ` VARCHAR
(
    191
) NOT NULL,
    ` expires ` DATETIME
(
    3
) NOT NULL,
    UNIQUE INDEX ` Session_sessionToken_key `
(
    `sessionToken`
),
    PRIMARY KEY
(
    `id`
)
    ) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE ` User `
(
    `id` VARCHAR
(
    191
) NOT NULL,
    ` name ` VARCHAR
(
    191
) NULL,
    ` email ` VARCHAR
(
    191
) NULL,
    ` emailVerified ` DATETIME
(
    3
) NULL,
    ` image ` VARCHAR
(
    191
) NULL,
    UNIQUE INDEX ` User_email_key `
(
    `email`
),
    PRIMARY KEY
(
    `id`
)
    ) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE ` VerificationToken `
(
    `identifier` VARCHAR
(
    191
) NOT NULL,
    ` token ` VARCHAR
(
    191
) NOT NULL,
    ` expires ` DATETIME
(
    3
) NOT NULL,
    UNIQUE INDEX ` VerificationToken_token_key `
(
    `token`
),
    UNIQUE INDEX ` VerificationToken_identifier_token_key `
(
    `
    identifier
    `,
    `
    token
    `
)
    ) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
