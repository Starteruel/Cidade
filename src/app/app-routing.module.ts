import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IdCidadeComponent } from './id-cidade/id-cidade.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', redirectTo : '/home', pathMatch: 'full'},
  {path: 'cidades', component: IdCidadeComponent},
  {path: 'cidades/:id', component: CadastroComponent},
  {path: 'cidades' ,  component: CadastroComponent},
  {path: 'home' ,  component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
