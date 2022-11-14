import { Baralho } from './baralho';
import { Jogador } from './jogador';

export interface Sala {
  id: string;
  hash: string;
  baralho: Baralho;
  jogadores: Jogador[];
  dado: number;
  status: string;
}
