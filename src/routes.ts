import * as express from "express";

import { healthCheck } from "./api/controllers/healthCheck";

export const init = (app: express.Application) => {
  app.get("/health", healthCheck);
};
