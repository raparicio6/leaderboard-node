import * as express from 'express';

import { healthCheck } from './controllers/healthCheck';
import { createPlayer, getPlayers, updatePlayer } from './controllers/players';

export const init = (app: express.Application) => {
  app.get('/health', healthCheck);
  app.post('/players', createPlayer);
  app.get('/players', getPlayers);
  app.put('/players', updatePlayer);
};
