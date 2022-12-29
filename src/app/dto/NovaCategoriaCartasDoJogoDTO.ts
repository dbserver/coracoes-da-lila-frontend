import { NovaCategoriaDTO } from "./NovaCategoriaDTO";

export interface NovaCategoriaCartasDoJogoDTO {
    jogadorID?: string;
    salaHash: string;
    listaCartasParaAtualizar: NovaCategoriaDTO[];
}
