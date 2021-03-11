import { env, Env } from "./env";
import logger from "./logger";
import app from "./app";

const { port } = env as Env;

Promise.resolve()
  .then(() => {
    app.listen(port);
    logger.info(`Listening on port: ${port}`);
  })
  .catch(err => {
    logger.error(err);
    process.exit(1);
  });
