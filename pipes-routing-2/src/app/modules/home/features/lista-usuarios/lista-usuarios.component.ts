import { Component, OnInit } from '@angular/core';
import { UsuariosModel } from '../../data/models/usuarios.model';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.scss']
})
export class ListaUsuariosComponent implements OnInit {

  listaUsuarios: UsuariosModel[] = [
    { id: 1, nome: 'Nathan Carlos', valorMensalidade: 100, dataUltimoPgto: new Date('2021-07-23'), dataInclusaoSistema: new Date('2021-07-01') },
    { id: 2, nome: 'Roberto Carlos', valorMensalidade: 200, dataUltimoPgto: new Date('2021-07-23'), dataInclusaoSistema: new Date('2021-07-01') },
    { id: 3, nome: 'João Carlos', valorMensalidade: 300, dataUltimoPgto: new Date('2021-07-23'), dataInclusaoSistema: new Date('2021-07-01') },
    { id: 4, nome: 'Maria Carlos', valorMensalidade: 400, dataUltimoPgto: new Date('2021-07-23'), dataInclusaoSistema: new Date('2021-07-01') },
    { id: 5, nome: 'José Carlos', valorMensalidade: 500, dataUltimoPgto: new Date('2021-07-23'), dataInclusaoSistema: new Date('2021-07-01') },
    { id: 6, nome: 'Pedro Carlos', valorMensalidade: 600, dataUltimoPgto: new Date('2021-07-23'), dataInclusaoSistema: new Date('2021-07-01') },
    { id: 7, nome: 'Paulo Carlos', valorMensalidade: 700, dataUltimoPgto: new Date('2021-07-23'), dataInclusaoSistema: new Date('2021-07-01') },
    { id: 8, nome: 'José Carlos', valorMensalidade: 800, dataUltimoPgto: new Date('2021-07-23'), dataInclusaoSistema: new Date('2021-07-01') },
    { id: 9, nome: 'Maria Carlos', valorMensalidade: 900, dataUltimoPgto: new Date('2021-07-23'), dataInclusaoSistema: new Date('2021-07-01') },
    { id: 10, nome: 'Pedro Carlos', valorMensalidade: 1000, dataUltimoPgto: new Date('2021-07-23'), dataInclusaoSistema: new Date('2021-07-01') },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
