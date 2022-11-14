import { Baralho } from "./baralho";

export interface Admin{
    id : string,
    baralho : Baralho[],
    senha : string
}