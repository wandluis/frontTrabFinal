import { FormControl } from '@angular/forms';
import { Autor } from './../../autores/model';
import { AutoresService } from './../../autores/autores.service';
import { ActivatedRoute } from '@angular/router';
import { LivrosService } from './../livros.service';
import { Livro } from "./../model";
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-livros-cadastro',
  templateUrl: './livros-cadastro.component.html'
  //styleUrls: ['./livros-cadastro.component.css']
})
export class LivrosCadastroComponent implements OnInit {

  livro = new Livro();
  autores: Autor[];
  val1: Autor;

  constructor(
    private service: LivrosService,
    private autoresService: AutoresService,
    private messageService: MessageService,
    private rota: ActivatedRoute,
  ) {  }


  ngOnInit() {
    this.pesquisarAutores();
  }

  pesquisarAutores(){
    this.autoresService.pesquisar("")
    .then((dados)=>{
      this.autores=dados;
    });
  }

  salvar(form: FormControl) {
    this.service.adicionar(this.livro)
    .then( ()=>{
      this.messageService.add({severity:'success', summary:'Cadastro', detail:'Livro '+this.livro.titulo+' cadastrado'});
      form.reset();
    });
  }

}
