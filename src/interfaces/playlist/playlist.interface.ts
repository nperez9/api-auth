import { Game, Platfroms } from '../game';
import { SharedUser } from '../user.interface';

export interface Playlist {
  games: Game[];
  user: SharedUser;
  platform: Platfroms;
  isPublic: boolean;
  title: string;
  gameTotal: number;
  description?: string;
}
