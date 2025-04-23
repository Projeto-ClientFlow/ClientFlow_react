import Tema from './Tema'
import Usuario from './Usuario'

export default interface Produto {
  id: number;
  nome: string;
  segmento: string;
  pontoFocal: string;
  valorContrato: number;
  tema: Tema | null;
  usuario: Usuario | null;
}