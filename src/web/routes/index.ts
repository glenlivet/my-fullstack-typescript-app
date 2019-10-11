import { Router, Request, Response } from "express";
import breeds from "./breeds";

const routes = Router();

routes.use("/breeds", breeds);

export default routes;
