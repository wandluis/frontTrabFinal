import { Autor } from './model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AutoresService {

  autoresURL = 'http://localhost:8080/autor';
  urlFiltro;

  constructor(private http: HttpClient) { }

  pesquisar(filtro: any): Promise<any> {
    if(filtro.nome){
      this.urlFiltro = 'http://localhost:8080/autor/filtro?nome='+filtro.nome;
    }else{
      this.urlFiltro = 'http://localhost:8080/autor';
    }

    return this.http.get<any>(this.urlFiltro).toPromise();
  }

  excluir(id:number):Promise<void>{
    return this.http.delete(this.autoresURL+'/'+id)
    .toPromise()
    .then(() => null);
  }

  adicionar(autor: Autor): Promise<any>{
    return this.http.post(this.autoresURL, autor)
    .toPromise();
  }

  alterar(autor: Autor): Promise<any>{
    return this.http.put(this.autoresURL+'/'+autor.id, autor)
    .toPromise();
  }

  buscarPorCodigo(codigo: number): Promise<Autor> {
    return this.http.get<Autor>(this.autoresURL+'/'+codigo).toPromise();
  }




}
