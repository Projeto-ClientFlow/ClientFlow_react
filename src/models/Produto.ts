import { Categorias } from '../models/Categorias.ts'

export default interface Produto {
  id: number;
  nome: string;
  segmento: string;
  pontoFocal: string;
  valorContrato: number;
  categoria: Categorias | null;
}