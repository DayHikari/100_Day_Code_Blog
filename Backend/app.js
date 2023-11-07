// // Imports
// Import express
import express from "express";

// Import cors
import cors from "cors";

// Declare the app variable set to express
const app = express();

// Set the app.use methods
app.use(cors());
app.use(express.json());

// Error handling for use of an incorrect filepath
app.use((req, res) => {
    res.status(404).json({
        success: false;
        error: "Incorrect file path. Please try /posts"
    });
});

// Export the app variable as default
export default app;