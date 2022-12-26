import { Baralho } from './baralho';
import { CartaObjetivo } from './cartaObjetivo';
import { Jogador } from './jogador';

export interface Sala {
  id: string;
  hash: string;
  cartasObjetivo: CartaObjetivo[];
  opcoesCartaObjetivo: CartaObjetivo[];
  cartaObjetivoEscolhida: CartaObjetivo;
  baralho: Baralho;
  cartaInicioId: string;
  jogadores: Jogador[];
  dado: number;
  status: string;
  jogadorEscolhido: Jogador;
}
