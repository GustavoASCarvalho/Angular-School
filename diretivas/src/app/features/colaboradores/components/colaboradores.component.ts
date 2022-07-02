import { Component, OnInit } from '@angular/core';
import { Colaborador } from '../model/colaborador.model';

@Component({
  selector: 'app-colaboradores',
  templateUrl: './colaboradores.component.html',
  styleUrls: ['./colaboradores.component.scss']
})
export class ColaboradoresComponent implements OnInit {
  colaboradores: Colaborador[] = []

  constructor() { }

  ngOnInit(): void {
  }

  addRandonColaborador() {
    if (this.colaboradores.length < 10) {
      this.colaboradores.push(this.getRandomColaborador())
    }
  }

  removeColaborador() {
    if (this.colaboradores.length > 0) {
      this.colaboradores.pop()
    }
  }

  getRandomColaborador(): Colaborador {

    const colaborador: Colaborador = {
      id: Math.floor(Math.random() * 100),
      nome: `Colaborador ${this.colaboradores.length + 1}`,
      salario: Math.floor(Math.random() * 25000) + 1,
      cargo: Math.random() > 0.5 ? 'Desenvolvedor' : 'Analista',
      ativo: true,
      imageUrl: 'https://picsum.photos/200/300?random'
    }
    return colaborador
  }
}
