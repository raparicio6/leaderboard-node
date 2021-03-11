import Player from './player';

export interface PlayerResponse extends Player {
  id: string;
  wins: number;
}

export interface PlayersResponse {
  players: PlayerResponse[];
}
