import * as dotenv from "dotenv";
import * as path from "path";

import { getOsEnv, normalizePort } from "./lib/env";

dotenv.config({
  path: path.join(
    process.cwd(),
    `.env${process.env.NODE_ENV === "test" ? ".test" : ""}`
  ),
});

export interface EnvType {
  readonly node: string;
  readonly isProduction: boolean;
  readonly isTest: boolean;
  readonly isDevelopment: boolean;
  readonly port: number;
}

export const env = {
  node: process.env.NODE_ENV || "development",
  isProduction: process.env.NODE_ENV === "production",
  isTest: process.env.NODE_ENV === "test",
  isDevelopment: process.env.NODE_ENV === "development",
  port: normalizePort(process.env.PORT || getOsEnv("APP_PORT")),
};
