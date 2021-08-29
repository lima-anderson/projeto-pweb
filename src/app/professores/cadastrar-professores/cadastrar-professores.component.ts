import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Professor} from "../../shared/model/professor";
import {PROFESSORES} from "../../shared/model/PROFESSORES";
import {ProfessorService} from "../../shared/services/professor.service";

@Component({
  selector: 'app-cadastrar-professores',
  templateUrl: './cadastrar-professores.component.html',
  styleUrls: ['./cadastrar-professores.component.scss']
})
export class CadastrarProfessoresComponent implements OnInit {
  professor: Professor = new Professor();

  operacaoCadastro = true;

  constructor(private  ProfessorService: ProfessorService, private rotaAtual: ActivatedRoute, private roteador: Router) {
    if(this.rotaAtual.snapshot.paramMap.has('id')) {
      this.operacaoCadastro = false;
      const idParaEdicao = Number(this.rotaAtual.snapshot.paramMap.get('id'));
      this.ProfessorService.pesquisarPorId(idParaEdicao).subscribe(
        usuarioRetornado => this.professor = usuarioRetornado
      );
    }
  }

  ngOnInit(): void {
  }

  inserirProfessor(): void{

      if(this.professor.id) {
      this.ProfessorService.atualizar(this.professor).subscribe(professor => {
        console.log(professor);
        this.roteador.navigate(['listarProfessores']);
      })

    } else {
      this.ProfessorService.inserir(this.professor).subscribe(professor => {
        console.log(professor);
        this.roteador.navigate(['listarProfessores']);
      })
      this.professor = new Professor();

    }


  }

}
