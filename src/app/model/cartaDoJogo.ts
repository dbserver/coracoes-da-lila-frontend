import { CartaDoJogoEnumCategoria } from "../enum/CartaDoJogoEnumCategoria";
import { CartaDoJogoEnumTipo } from "../enum/CartaDoJogoEnumTipo";

export interface CartaDoJogo{
    id: string;
    tipo: CartaDoJogoEnumTipo;
    categoria: CartaDoJogoEnumCategoria;
    bonus: boolean;
    texto: string;
    valorCoracaoPequeno: number;
    valorCoracaoGrande: number;
    fonte: string;
    pontos: number;
}
