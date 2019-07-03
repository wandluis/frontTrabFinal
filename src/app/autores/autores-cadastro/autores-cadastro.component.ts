import { Autor } from './../model';
import { Component, OnInit } from '@angular/core';
import { AutoresService } from '../autores.service';
import { MessageService } from 'primeng/api';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-autores-cadastro',
  templateUrl: './autores-cadastro.component.html',
  styleUrls: ['./autores-cadastro.component.css']
})
export class AutoresCadastroComponent implements OnInit {

  autor = new Autor();
  gender: String = '1';

  constructor(
    private service: AutoresService,
    private messageService: MessageService,
    private rota: ActivatedRoute,
    //private rotaP: Router
  ) { }

  inserir(form: FormControl) {
    this.service.adicionar(this.autor)
    .then( ()=>{
      this.messageService.add({severity:'success', summary:'Cadastro', detail:'Autor '+this.autor.nome+' cadastrada'});
      form.reset();
    });
  }

  ngOnInit() {
    const codigoAutor = this.rota.snapshot.params['id'];
    if(codigoAutor){
      this.carregarAutor(codigoAutor);
    }
  }

  carregarAutor(id:number){
    this.service.buscarPorCodigo(id)
      .then((data) => {
        this.autor = data;
      }
    );
  }

  alterar(form: FormControl) {
    this.service.alterar(this.autor)
    .then( ()=>{
      this.messageService.add({severity:'success', summary:'Edição', detail:'Categoria '+this.autor.nome+' alterada'});
      form.reset();
    });
  }

  salvar(form: FormControl) {
    if(this.editando){
      this.alterar(form);
    }else{
      this.inserir(form);
    }
    //this.rotaP.navigate(['/autores']);
  }

  get editando(){
    return Boolean(this.autor.id);
  }

}
