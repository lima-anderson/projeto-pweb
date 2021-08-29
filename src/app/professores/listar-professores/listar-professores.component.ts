import { Component, OnInit } from '@angular/core';
import {PROFESSORES} from "../../shared/model/PROFESSORES";
import {Professor} from "../../shared/model/professor";
import {ProfessorService} from "../../shared/services/professor.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-professores',
  templateUrl: './listar-professores.component.html',
  styleUrls: ['./listar-professores.component.scss']
})


export class ListarProfessoresComponent implements OnInit {
  professores = Array<Professor>();

  displayedColumns: string[] = ['nome', 'cpf', 'idade', 'dataAdm', 'sexo', 'opções'];

  constructor(private ProfessorService: ProfessorService, private roteador: Router) {

  }

  ngOnInit(): void {
    this.ProfessorService.listar().subscribe(
      p => this.professores = p
    )


  }

  editar(professor: Professor): void {
    this.roteador.navigate(['cadastrarProfessor', professor.id])
  }

  remover(professor: Professor) {

    this.ProfessorService.remover(professor.id).subscribe(
      resposta => {
        const indexUsuarioParaRemover = this.professores.findIndex(u => u.cpf === professor.cpf)

        if(indexUsuarioParaRemover > -1) {

          this.professores.splice(indexUsuarioParaRemover, 1)
          this.ngOnInit()


        }

        }

    )

  }

}
