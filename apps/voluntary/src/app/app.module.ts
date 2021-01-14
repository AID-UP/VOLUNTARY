import { FiltroPersonalizadoService } from './app-forms/volunteersForm/filtro-personalizado.service';
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

import { Erro404Component } from './erro404/erro404.component';

import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppFormsModule } from './app-forms/app-forms.module';

import { LoginComponent } from './login/login.component';
import { VoluntaryService } from './volunteers/services/voluntary.service';
import { VolunteersModule } from './volunteers/volunteers.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    Erro404Component,
    LoginComponent,
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
    VolunteersModule,
    BrowserAnimationsModule,
  ],
  providers: [VoluntaryService, FiltroPersonalizadoService],
  bootstrap: [AppComponent],
  exports: [MainComponent],
})
export class AppModule {}
