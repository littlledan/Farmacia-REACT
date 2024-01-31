import Tema from './Categoria';

export default interface Postagem {
  id: number;
  nome: string;
  descricao: string;
  quantidade: number;
  laboratorio: string;
  preco: number;
  tema: Tema | null;
}