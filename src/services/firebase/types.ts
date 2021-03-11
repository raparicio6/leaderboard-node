import Player from '../../types/player';

interface StoredPlayer extends Player {
  wins: number;
}

export interface StoredPlayers {
  [id: string]: StoredPlayer;
}
