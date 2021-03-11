import * as express from "express";

export const healthCheck = (_: express.Request, res: express.Response) =>
  res.send({ uptime: process.uptime() });
