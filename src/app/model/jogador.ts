import { CartaDoJogo } from './cartaDoJogo';
import { CartaObjetivo } from './cartaObjetivo';

export interface Jogador {
  id?: string;
  nome: string;
  cartasDoJogo: CartaDoJogo[];
  cartasObjetivo: CartaObjetivo[];
  pontos: number;
  coracaoPequeno: number;
  coracaoGrande: number;
  bonusCoracaoPequeno: number;
  bonusCoracaoGrande: number;
  isHost: boolean;
  status: string;
  posicao?: number;
}
