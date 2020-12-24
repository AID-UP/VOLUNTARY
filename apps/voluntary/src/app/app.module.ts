import { FiltroPersonalizadoService } from './services/filtro-personalizado.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { HttpClientModule } from '@angular/common/http';

import { MypageComponent } from './mypage/mypage.component';
import { Erro404Component } from './erro404/erro404.component';
import { AppFormsModule } from './app-forms/app-forms.module';

import { CommonModule } from '@angular/common';
import { VoluntaryService } from './services/voluntary.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    MypageComponent,
    Erro404Component,


   ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppFormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule


  ],
  providers: [VoluntaryService, FiltroPersonalizadoService],
  bootstrap: [AppComponent],
  exports: [MainComponent],
})
export class AppModule {}
