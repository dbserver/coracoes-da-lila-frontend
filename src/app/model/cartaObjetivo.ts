import { Baralho } from "./baralho";

export interface CartaObjetivo {
  id:number;
  tipo:string;
  tipoContagem:number;
  categoria:string;
  textoRegra:string;
  textoTematico:string;
  pontos:number;
  baralho:Baralho[];
}
