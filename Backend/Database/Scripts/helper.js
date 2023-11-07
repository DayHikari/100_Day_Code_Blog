// Import pool from index.js
import {pool} from "../index.js";

// Function to reset the database
export async function resetDatabase() {
    // Drop the table if it already exists
    await pool.query(`DROP TABLE IF EXISTS posts;`);

    // Create the new table
    await pool.query(`
    CREATE TABLE posts (
        id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        day VARCHAR(255) NOT NULL,
        post VARCHAR(255) NOT NULL
    );
    `);

    // Input the initial dataset
    await pool.query(`
    INSERT INTO posts (day, post)
    VALUES
    ('1', 'Little late to start (15th Sept) but enjoyed my second Hackathon with SoC and began creating my own calculator based on what I have learnt so far. Let''s see how it goes!'),
    ('2', 'Spent some time studying git branching before looking at my calendar code which admittedly got the better of me today. But there is always tomorrow!'),
    ('3', 'Spend a few hours today recapping what I learnt during week 2 of SoC, hope it sticks!');
    `);

    // Console confirmation that reset is complete
    console.log("Database reset complete.")
}