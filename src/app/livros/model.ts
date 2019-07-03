export class Autor{
  id: number;
  nome: string;
}
export class Livro{
  id: number;
  titulo: string;
  preco: number;
  autores: Autor[] = [];
}
