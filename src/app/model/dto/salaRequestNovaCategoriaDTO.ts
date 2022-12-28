import { NovaCategoriaDTO } from "./novaCategoriaDTO";

export interface SalaRequestNovaCategoriaDTO {
    jogadorID?: string;
    salaHash: string;
    listaCartasParaAtualizar: NovaCategoriaDTO[];
}