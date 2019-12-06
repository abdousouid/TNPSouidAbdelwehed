import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { P1Component } from './p1/p1.component';
import { AfficheComponent } from './affiche/affiche.component';
import { MenuComponent } from './menu/menu.component';
import { AccueilComponent } from './accueil/accueil.component';
import { LoginComponent } from './login/login.component';
import { AdddogComponent } from './adddog/adddog.component';
import { ChangeComponent } from './change/change.component';
import { SearchComponent } from './search/search.component';
import { TreePipe } from './tree.pipe';

@NgModule({
  declarations: [
    AppComponent,
    P1Component,
    AfficheComponent,
    MenuComponent,
    AccueilComponent,
    LoginComponent,
    AdddogComponent,
    ChangeComponent,
    SearchComponent,
    TreePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
