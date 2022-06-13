import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaProdutosComponent } from './main/lista-produtos/lista-produtos.component';
import { WelcomeComponent } from './main/welcome/welcome.component';



@NgModule({
  declarations: [
    ListaProdutosComponent,
    WelcomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListaProdutosComponent,
    WelcomeComponent
  ]
})
export class FeaturesModule { }
