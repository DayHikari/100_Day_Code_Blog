import express, {Router} from "express";
import serverless from "serverless-http";
import { postsRoutes } from "../../Routes/postsRoutes";
import * as postControllers from "../../Controllers/postsControllers.js"

const api = express();

const router = Router();
router.get("/hello", (req, res) => res.send("Hello World!"));
router.get("/posts", postControllers.getPosts);

api.use("/api/", router);

export const handler = serverless(api);