import { StoredPlayers } from '../services/firebase';
import { PlayersResponse, PlayerResponse } from '../types/responses';

export const serializeGetPlayersResponse = (
  getPlayersResponse: StoredPlayers
): PlayersResponse => ({
  players: Object.keys(getPlayersResponse).reduce(
    (acum: PlayerResponse[], playerId) => {
      acum.push({ id: playerId, ...getPlayersResponse[playerId] });
      return acum;
    },
    []
  ),
});
