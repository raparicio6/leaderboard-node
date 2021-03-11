import * as morgan from "morgan";

import logger from "../../logger";
import { env, Env } from "../../env";

const stream: morgan.StreamOptions = {
  write: message => logger.info(message),
};

const skip = () => !(<Env>env).isDevelopment;

const morganMiddleware = morgan(
  ":method :url :status :res[content-length] - :response-time ms",
  { stream, skip }
);

export default morganMiddleware;
