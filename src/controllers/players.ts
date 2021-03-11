import * as express from 'express';

import { db } from '../services/firebase';
import Player from '../types/player';

const PLAYERS_TABLE = 'players';

export const createPlayer = (req: express.Request, res: express.Response) => {
  const player = <Player>req.body.player;
  db.ref(PLAYERS_TABLE).push(player, error => {
    if (!error) {
      return res.status(201).send({ player });
    }

    throw new Error();
  });
};
