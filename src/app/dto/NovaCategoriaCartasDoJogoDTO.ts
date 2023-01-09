import { NovaCategoriaDTO } from "./NovaCategoriaDTO";

export interface NovaCategoriaCartasDoJogoDTO {
    jogadorID?: string;
    salaHash: string;
    listaDeCartas: NovaCategoriaDTO[];
}
