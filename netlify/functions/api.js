import express, {Router} from "express";
import serverless from "serverless-http";
import * as postControllers from "../../Controllers/postsControllers.js";
import getLogins from "../../Controllers/loginControllers.js";

const api = express();

const router = Router();
// Post routing
router.get("/posts", postControllers.getPosts);
router.post("/posts", postControllers.createPost);
router.patch("/posts/:id", postControllers.updatePostById);
router.delete("/posts/:id", postControllers.deletePostById);
// Login routing
router.post("/login", getLogins);

api.use("/api/", router);

export const handler = serverless(api);