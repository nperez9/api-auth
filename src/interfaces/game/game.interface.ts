import { Genres } from './genres.interface';
import { Platfroms } from './platforms.interface';

/**
 * This interface is open to a lot of changes
 */
export interface Game {
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
  createdAt?: string;
}
