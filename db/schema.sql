-- ===================================================
-- User Management & Authentication schema
-- Covers: Registration, Auth, Passwords, Profile, Roles
-- ===================================================

CREATE TABLE IF NOT EXISTS users (
    id              SERIAL PRIMARY KEY,
    name            VARCHAR(100) NOT NULL,
    email           VARCHAR(255) UNIQUE NOT NULL,
    password_hash   TEXT NOT NULL,
    bio             TEXT DEFAULT '',
    avatar_url      TEXT DEFAULT '',
    role            VARCHAR(20) NOT NULL DEFAULT 'user',
    reset_token     TEXT,
    reset_token_expires TIMESTAMP,
    created_at      TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS "session" (
    "sid"    VARCHAR NOT NULL COLLATE "default" PRIMARY KEY,
    "sess"   JSON NOT NULL,
    "expire" TIMESTAMP(6) NOT NULL
);

CREATE INDEX IF NOT EXISTS "IDX_session_expire" ON "session" ("expire");