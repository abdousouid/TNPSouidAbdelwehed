import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {P1Component} from './p1/p1.component';
import {AfficheComponent} from './affiche/affiche.component';
import {AccueilComponent} from './accueil/accueil.component';
import {LoginComponent} from './login/login.component';
import {AdddogComponent} from './adddog/adddog.component';
import {ChangeComponent} from './change/change.component';
import {SearchComponent} from './search/search.component';
const routes: Routes = [
  {path:'p1',component:P1Component},
{path:'p1/:id',component:AfficheComponent},
{path:'search',component:SearchComponent},
{path:'login',component:LoginComponent},
{path:'accueil',component:AccueilComponent},
{path:'adddog',component:AdddogComponent},
{path:'change' ,component:ChangeComponent},
{path:'',redirectTo:'login',pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
