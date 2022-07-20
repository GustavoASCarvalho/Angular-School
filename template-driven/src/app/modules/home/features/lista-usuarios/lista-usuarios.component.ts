import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../../data/models/usuario.model';
import { UsuariosService } from '../../data/services/usuarios.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.scss']
})
export class ListaUsuariosComponent implements OnInit {

  listaUsuarios: UsuarioModel[] = []

  constructor(private usuariosService: UsuariosService) {
    this.listaUsuarios = this.usuariosService.getUsuarios();
  }

  ngOnInit(): void {
  }

}
