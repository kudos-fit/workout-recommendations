-- SQLite Database Schema for Workout Recommendation System
-- Enable WAL mode for better concurrency
PRAGMA journal_mode = WAL;

PRAGMA synchronous = NORMAL;

PRAGMA cache_size = 10000;

PRAGMA temp_store = MEMORY;

-- Users table
CREATE TABLE
    users (
        id TEXT PRIMARY KEY,
        email TEXT UNIQUE NOT NULL,
        name TEXT NOT NULL,
        fitness_level TEXT NOT NULL CHECK (
            fitness_level IN ('beginner', 'intermediate', 'advanced')
        ),
        preferences TEXT NOT NULL DEFAULT '{}', -- JSON
        created_at INTEGER DEFAULT (strftime ('%s', 'now')),
        updated_at INTEGER DEFAULT (strftime ('%s', 'now'))
    );

-- Workouts table
CREATE TABLE
    workouts (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        description TEXT,
        difficulty TEXT NOT NULL CHECK (
            difficulty IN ('beginner', 'intermediate', 'advanced')
        ),
        duration_minutes INTEGER NOT NULL,
        muscle_groups TEXT NOT NULL, -- JSON array
        equipment TEXT DEFAULT '[]', -- JSON array
        instructions TEXT NOT NULL, -- JSON array
        created_at INTEGER DEFAULT (strftime ('%s', 'now')),
        updated_at INTEGER DEFAULT (strftime ('%s', 'now'))
    );

-- Indexes for performance
CREATE INDEX idx_users_email ON users (email);

CREATE INDEX idx_users_fitness_level ON users (fitness_level);

CREATE INDEX idx_workouts_difficulty ON workouts (difficulty);

CREATE INDEX idx_workouts_duration ON workouts (duration_minutes);

CREATE INDEX idx_workouts_muscle_groups ON workouts (muscle_groups);