import { Baralho } from "./baralho";

export interface CartaObjetivo {
  id:number;
  tipo:string;
  tipo_contagem:number;
  categoria:string;
  texto_regra:string;
  texto_tematico:string;
  pontos:number;
  baralho:Baralho[];
}
