import { CartaDoJogo } from "./cartaDoJogo";
import { CartaInicio } from "./cartaInicio";
import { CartaObjetivo } from "./cartaObjetivo";

export interface Baralho{
    id: string;
    codigo: string;
    cartasDoJogo: CartaDoJogo[];
    cartasObjetivo: CartaObjetivo[];
    cartaInicio: CartaInicio[];
    titulo: string;
    descricao: string;
}
