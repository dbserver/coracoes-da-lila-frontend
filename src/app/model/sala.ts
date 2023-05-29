import { Baralho } from './baralho';
import { CartaDoJogo } from './cartaDoJogo';
import { CartaObjetivo } from './cartaObjetivo';
import { Jogador } from './jogador';

export interface Sala {
  id: string;
  hash: string;
  cartasObjetivo: CartaObjetivo[];
  opcoesCartaObjetivo: CartaObjetivo[];
  cartaObjetivoEscolhida: CartaObjetivo;
  cartasDisponiveis: CartaDoJogo[];
  cartaInicioId: string;
  jogadores: Jogador[];
  dado: number;
  status: string;
  jogadorEscolhido: Jogador;
}
