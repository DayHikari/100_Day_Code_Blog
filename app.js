// // Imports
// Import express
import express from "express";

// Import cors
import cors from "cors";

// Import posts routes
import {postsRoutes} from "./Routes/postsRoutes.js";

// Import login route(s)
import {loginRoutes} from "./Routes/loginRoutes.js";

// Declare the app variable set to express
const app = express();

// Set the app.use methods
app.use(cors());
app.use(express.json());
// app.use(express.static("Frontend"))
app.use("/posts", postsRoutes);
app.use("/login", loginRoutes);

// Error handling for use of an incorrect filepath
app.use((_req, res, _next) => {
    res.status(404).json({
        success: false,
        error: "Incorrect file path. Please try /posts"
    });
});

// Export the app variable as default
export default app;