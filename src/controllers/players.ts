import * as express from 'express';
import { v4 as uuidv4 } from 'uuid';

import { db, StoredPlayers } from '../services/firebase';
import Player from '../types/player';
import { serializeGetPlayersResponse } from '../serializers/players';
import { PlayerInput } from '../types/inputs';

const PLAYERS_REF = 'players';

export const createPlayer = (req: express.Request, res: express.Response) => {
  const player = <Player>req.body.player;
  const playerId = uuidv4();

  return db
    .ref(`${PLAYERS_REF}/${playerId}`)
    .set(player)
    .then(() => res.status(201).send({ player: { id: playerId, ...player } }));
};

export const getPlayers = (_: express.Request, res: express.Response) =>
  db
    .ref(PLAYERS_REF)
    .get()
    .then(players =>
      res.send(serializeGetPlayersResponse(<StoredPlayers>players.toJSON()))
    );

export const updatePlayer = (req: express.Request, res: express.Response) => {
  const player = <PlayerInput>req.body.player;
  const storedPlayer = db.ref(PLAYERS_REF).child(player.id);

  return storedPlayer.update(player).then(() => res.send(player));
};
