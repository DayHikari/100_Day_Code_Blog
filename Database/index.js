// Import pg
import pg from "pg";

// Assign the database connection from .env
const connectionString = process.env.DATABASE_URL;
console.log(`Database URL: ${connectionString}`)

// Error handling in case the database url isn't assigned
if (!connectionString) {
    throw new error (
        "Database URL not present."
    );
}

// Export the pg.Pool as pg using connectionString
export const pool = new pg.Pool({connectionString});