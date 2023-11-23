// // Imports
// Import pool
import {pool} from "../index.js";

// Import function from helper.js
import { resetDatabase } from "./helper.js";

// Call resetDatabase function in a try/catch
try {
    // Calling the resetDatabase function
    await resetDatabase();
} catch (error) {
    console.error("Database reset failed to complete", error);
} finally {
    // Close the pool instance
    await pool.end();
}