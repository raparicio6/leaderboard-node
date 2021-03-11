import * as express from "express";
import * as bodyparser from "body-parser";
import {
  expressMiddleware,
  expressRequestIdMiddleware,
} from "express-wolox-logger";
import * as cors from "cors";
import * as helmet from "helmet";

import { env, Env } from "./env";
import logger from "./logger";
import * as routes from "./routes";

const app: express.Application = express();
const { isTest } = env as Env;

app.use(bodyparser.json());

app.use(cors());

app.use(helmet());

app.use(expressRequestIdMiddleware());
if (!isTest) app.use(expressMiddleware({ loggerFn: logger.info }));

// app.use(errors.handle);

routes.init(app);

export default app;
