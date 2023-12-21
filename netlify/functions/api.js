import express, {Router} from "express";
import serverless from "serverless-http";
import { postsRoutes } from "../../Routes/postsRoutes";

const api = express();

const router = Router();
router.get("/hello", (req, res) => res.send("Hello World!"));
router.get("/posts", postsRoutes);

api.use("/api/", router);

export const handler = serverless(api);