import { Baralho } from "./baralho";

export interface CartaObjetivo {
    id: number;
    baralho: Baralho[];
    classificacao: string;
    pontos: number;
    categoria: string;
    descricao:string;
    
}