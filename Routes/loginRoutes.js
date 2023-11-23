// // Imports
// Import controller
import getLogins from "../Controllers/loginControllers.js";

// Import express
import express from "express";

// // Export(s)
// Export the router
export const loginRoutes = express.Router();

// // Express route(s)
// GET request
loginRoutes.get("/", getLogins)


//