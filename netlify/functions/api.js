// YOUR_BASE_DIRECTORY/netlify/functions/api.ts

import express from "express";
import serverless from "serverless-http";
import {postsRoutes} from "../../Routes/postsRoutes.js"
import {loginRoutes} from "../../Routes/loginRoutes.js"

const api = express();

// const router = Router();
// router.get("/", (req, res) => res.send("Hello World!"));
api.use(express.json());
api.use("/posts", postsRoutes);
api.use("/login", loginRoutes);

export const handler = serverless(api);
