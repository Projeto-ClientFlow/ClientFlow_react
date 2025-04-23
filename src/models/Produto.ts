import Tema from './Tema'

export default interface Produto {
  id: number;
  nome: string;
  segmento: string;
  pontoFocal: string;
  valorContrato: number;
  tema: Tema | null;
  usuario: Usuario | null;
}