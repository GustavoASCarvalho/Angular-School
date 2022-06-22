import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColaboradoresComponent } from './colaboradores/colaboradores.component';



@NgModule({
  declarations: [
    ColaboradoresComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
   ColaboradoresComponent
  ]
})
export class FeaturesModule { }
