import { AutoresPesquisaComponent } from './autores/autores.pesquisa/autores-pesquisa.component';
import { LivrosPesquisaComponent } from './livros/livros.pesquisa/livros-pesquisa.component';
import { AutoresModule } from './autores/autores.module';
import { LivrosModule } from './livros/livros.module';
import { AutoresCadastroComponent } from './autores/autores-cadastro/autores-cadastro.component';
import { LivrosCadastroComponent } from './livros/livros-cadastro/livros.cadastro.component';
import { ButtonModule } from 'primeng/button';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ConfirmationService } from 'primeng/api';
import { SidebarModule } from 'primeng/sidebar';
import {Routes, RouterModule} from '@angular/router';


const rotas: Routes = [
  {path: '', redirectTo:'autores', pathMatch:'full'},
  {path: 'livros/novo', component: LivrosCadastroComponent},
  {path: 'autores/novo', component:AutoresCadastroComponent},
  {path: 'autores', component:AutoresPesquisaComponent},
  //{path: 'livros', component: LivrosPesquisaComponent},
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AutoresModule,
    LivrosModule,
    HttpClientModule,
    SidebarModule,
    ButtonModule,
    RouterModule.forRoot(rotas)
  ],
  providers: [
    ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
