import * as dotenv from "dotenv";
import * as path from "path";

const getOsEnv = (key: string): string => {
  if (typeof process.env[key] === "undefined") {
    throw new Error(`Environment variable ${key} is not set.`);
  }

  return process.env[key] as string;
};

const normalizePort = (port: string): number | string | boolean => {
  const parsedPort = parseInt(port, 10);
  if (Number.isNaN(parsedPort)) {
    // named pipe
    return port;
  }

  if (parsedPort >= 0) {
    // port number
    return parsedPort;
  }

  return false;
};

dotenv.config({
  path: path.join(
    process.cwd(),
    `.env${process.env.NODE_ENV === "test" ? ".test" : ""}`
  ),
});

export interface Env {
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
