import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoresPesquisaComponent } from './autores.pesquisa/autores-pesquisa.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { TableModule } from 'primeng/table';
import { AutoresService } from './autores.service';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { FormsModule } from '@angular/forms';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { AutoresCadastroComponent } from './autores-cadastro/autores-cadastro.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AutoresPesquisaComponent, AutoresCadastroComponent],
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    TooltipModule,
    TableModule,
    ToastModule,
    FormsModule,
    ConfirmDialogModule,
    RouterModule
  ],
  exports:[
    AutoresPesquisaComponent,
    AutoresCadastroComponent
  ],
  providers: [
    AutoresService,
    MessageService
  ]
})

export class AutoresModule { }
