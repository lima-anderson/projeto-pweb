import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarProfessoresComponent } from './cadastrar-professores/cadastrar-professores.component';
import { ListarProfessoresComponent } from './listar-professores/listar-professores.component';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {RouterModule} from "@angular/router";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatTableModule} from "@angular/material/table";
import {FlexModule} from "@angular/flex-layout/typings/flex";
import {FlexLayoutModule} from "@angular/flex-layout";



@NgModule({
  declarations: [
    CadastrarProfessoresComponent,
    ListarProfessoresComponent
  ],
    imports: [
        CommonModule,
        MatCardModule,
        MatFormFieldModule,
        FormsModule,
        MatIconModule,
        MatInputModule,
        MatButtonModule,
        RouterModule,
        MatOptionModule,
        MatSelectModule,
        MatTableModule,
      FlexLayoutModule
    ]
})
export class ProfessoresModule { }
