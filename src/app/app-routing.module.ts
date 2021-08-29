import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CadastrarProfessoresComponent} from "./professores/cadastrar-professores/cadastrar-professores.component";
import {MainComponent} from "./layout/main/main.component";
import {ListarProfessoresComponent} from "./professores/listar-professores/listar-professores.component";

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'main',
    component: MainComponent
  },

  {
    path: 'cadastrarProfessor',
    component: CadastrarProfessoresComponent
  },
  {
    path: 'cadastrarProfessor/:id',
    component: CadastrarProfessoresComponent
  },
  {
    path: 'listarProfessores',
    component: ListarProfessoresComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
