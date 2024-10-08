import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IdCidadeComponent } from './id-cidade/id-cidade.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CadastroComponent } from './cadastro/cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    IdCidadeComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
