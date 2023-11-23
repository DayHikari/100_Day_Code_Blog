// // Imports
// Import pool from index
import {pool} from "../Database/index.js";

// Get login information function
export default async function getLogin() {
    // Set the query text to a variable
    const queryText = `SELECT * FROM login`;

    // Send the query to the database
    const data = await pool.query(queryText);

    // Return the data
    return data.rows;
}