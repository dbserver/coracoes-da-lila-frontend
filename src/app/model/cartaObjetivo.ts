import { Baralho } from "./baralho";

export interface CartaObjetivo {
  id:number;
  tipo:string;
  tipo_contagem:number;
  categoria:string;
  textoRegra:string;
  textoTematico:string;
  pontos:number;
  baralho:Baralho[];
}
