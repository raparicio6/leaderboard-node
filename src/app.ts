import * as express from 'express';
import * as bodyparser from 'body-parser';
import * as cors from 'cors';
import * as helmet from 'helmet';

import * as routes from './routes';
import loggerMiddleware from './middlewares/logger';

const app: express.Application = express();

app.use(bodyparser.json());

app.use(cors());

app.use(helmet());

app.use(loggerMiddleware);

// app.use(errors.handle);

routes.init(app);

export default app;
