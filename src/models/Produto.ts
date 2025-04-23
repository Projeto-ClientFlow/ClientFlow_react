import { Categorias } from '../models/Categorias'

export interface Produto {
  id: number;
  nome: string;
  segmento: string;
  pontoFocal: string;
  valorContrato: number;
  categoria: Categorias | null;
  usuario: null;
}