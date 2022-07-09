import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListaUsuariosComponent } from './features/lista-usuarios/lista-usuarios.component';


@NgModule({
  declarations: [
    HomeComponent,
    ListaUsuariosComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
