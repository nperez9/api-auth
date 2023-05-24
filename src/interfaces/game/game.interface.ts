import { Genres } from './genres.interface';
import { Platfroms } from './platforms.interface';

export interface Game {
  _id: number;
  name: string;
  year: number;
  platforms: Platfroms[];
  // for custom list ORDER
  listOrder?: number;
  score?: {
    user?: number;
    metacritic?: number;
    page?: number;
  };
  // Recalculate prom score for every user ranks
  userPromScore?: number;
  genre?: Genres[];
}
