------------USER REGISTRATION------------------------------
DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    first VARCHAR (255) NOT NULL CHECK (first <> ''),
    last VARCHAR (255) NOT NULL CHECK (last <> ''),
    email VARCHAR (255) NOT NULL CHECK (email <> '') UNIQUE,
    password_digest VARCHAR (255) NOT NULL CHECK (password_digest <> ''),
    group_tag VARCHAR (255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

SELECT * FROM users;
