import { Component, OnInit } from '@angular/core';
import { AutoresService } from '../autores.service';
import { MessageService, ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-autores-pesquisa',
  templateUrl: './autores-pesquisa.component.html',
  styleUrls: ['./autores-pesquisa.component.css']
})
export class AutoresPesquisaComponent implements OnInit {

  autores = [];
  nomeBusca:string;

  constructor(
    private service:AutoresService,
    private msg:MessageService,
    private conf:ConfirmationService
  ) { }

  pesquisar(){
    this.service.pesquisar({nome:this.nomeBusca})
    .then((dados)=>{
      this.autores=dados;
    });
  }

  ngOnInit() {
    this.pesquisar();
  }

  confirmarExclusao(autor:any){
    this.conf.confirm({
      message: 'Tem certeza que deseja excluir '+autor.nome+'?',
      accept: () => {
        this.excluir(autor);
      }
    });
  }

  excluir(autor: any){
    this.service.excluir(autor.id)
    .then(()=>{
      this.pesquisar();
      this.msg.add({severity:'success', summary:'Exclusão', detail:'Autor '+autor.nome+' excluído'});
    });
  }
}
