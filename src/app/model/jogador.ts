import { CartaDoJogo } from './cartaDoJogo';
import { CartaObjetivo } from './cartaObjetivo';

export interface Jogador {
  id?: string;
  nome: string;
  cartasDoJogo: CartaDoJogo[];
  cartasObjetivo: CartaObjetivo[];
  pontos: number;
  coracaoPeq: number;
  coracaoGra: number;
  bonusCoracaoPeq: number;
  bonusCoracaoGra: number;
  ishost: boolean;
  status: string;
}
