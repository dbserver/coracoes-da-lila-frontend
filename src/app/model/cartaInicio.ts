import { Baralho } from "./baralho";

export interface CartaInicio {
    id: number;
    nome: string;
    descricao: string;
    baralho: Baralho[];
}