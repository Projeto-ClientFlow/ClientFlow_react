import Produto from "./Produto";

export interface Categorias {

    id?: number| null;
    descricao: string;
    produto?: Produto | null;
}