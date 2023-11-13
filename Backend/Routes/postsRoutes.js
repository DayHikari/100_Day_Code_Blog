// // Imports
// Import controllers
import * as postsControllers from "../Controllers/postsControllers.js";

// Import express
import express from "express";

// // Exports
// Export the router
export const postsRoutes = express.Router();

// // Express routes
// Get requests
postsRoutes.get("/", postsControllers.getPosts);

// Post requests
postsRoutes.post("/", postsControllers.createPost);

// Patch requests
postsRoutes.patch("/:id", postsControllers.updatePostById);

// Delete requests
postsRoutes.delete("/:id", postsControllers.deletePostById);