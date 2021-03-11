import Player from './player';

export interface PlayerResponse extends Player {
  id: string;
}

export interface PlayersResponse {
  players: PlayerResponse[];
}
