import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { LivrosService } from './livros.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LivrosCadastroComponent } from './livros-cadastro/livros.cadastro.component';
import { InputTextModule } from 'primeng/inputtext';
import { PickListModule } from 'primeng/picklist';

@NgModule({
  declarations: [LivrosCadastroComponent],
  imports: [
    CommonModule,
    FormsModule,
    ToastModule,
    InputTextModule,
    PickListModule,
    ButtonModule
  ],
  providers: [
    LivrosService
  ],
  exports:[
    LivrosCadastroComponent
  ]
})
export class LivrosModule { }
