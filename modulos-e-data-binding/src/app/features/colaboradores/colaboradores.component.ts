import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colaboradores',
  templateUrl: './colaboradores.component.html',
  styleUrls: ['./colaboradores.component.scss']
})
export class ColaboradoresComponent implements OnInit {

  valor = 1;
  title = `Colaboradores (1)`;
  colaborador = { id: 7, nome: 'Nathan Carlos Exercicio', salario: 4500, cargo: 'Dev Pl' }

  constructor() { }

  ngOnInit(): void {
  }

  addValue() {
    console.log('addValue');
    this.valor++;
    this.title = `Colaboradores (${this.valor})`;
  }
}
