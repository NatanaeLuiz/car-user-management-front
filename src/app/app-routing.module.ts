import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';

const routes: Routes = [

  {
    path:'portal', component:MenuBarComponent,
    pathMatch:'full'
  },
  {
    path:'login', component:NavComponent,
    pathMatch:'full'
  },
  {
    path:'**', redirectTo:'' //Rota Coringa para redirecionar o usuario para a rota principal
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
