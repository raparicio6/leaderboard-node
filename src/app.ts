import * as express from "express";
import * as bodyparser from "body-parser";
import {
  expressMiddleware,
  expressRequestIdMiddleware,
} from "express-wolox-logger";
import * as cors from "cors";
import * as helmet from "helmet";

import { env, EnvType } from "./env";
import logger from "./logger";

const app: express.Application = express();
const { port, isTest } = env as EnvType;

// const routes: Array<CommonRoutesConfig> = [];

app.use(bodyparser.json());

app.use(cors());

app.use(helmet());

app.use(expressRequestIdMiddleware());
if (!isTest) app.use(expressMiddleware({ loggerFn: logger.info }));

app.get("/", (_: express.Request, res: express.Response) => {
  res.status(200).send(`Server up and running!`);
});

Promise.resolve()
  .then(() => {
    app.listen(port);
    logger.info(`Listening on port: ${port}`);
  })
  .catch(err => {
    logger.error(err);
    process.exit(1);
  });

// routes.init(app);

// app.use(errors.handle);
