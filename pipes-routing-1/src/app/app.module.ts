import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import ptBr from '@angular/common/locales/pt';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './modules/home/home.module';
import { LoginModule } from './modules/login/login.module';

registerLocaleData(ptBr)

@NgModule({
  imports: [BrowserModule, AppRoutingModule, HomeModule, LoginModule],
  declarations: [AppComponent],
  providers: [{ provide: LOCALE_ID, useValue: 'pt' }],
  bootstrap: [AppComponent]
})

export class AppModule { }
