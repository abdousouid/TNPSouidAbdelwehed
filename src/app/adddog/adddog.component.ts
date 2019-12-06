import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {BluecardService} from '../bluecard.service';
import { StringifyOptions } from 'querystring';
@Component({
  selector: 'app-adddog',
  templateUrl: './adddog.component.html',
  styleUrls: ['./adddog.component.css']
})
export class AdddogComponent implements OnInit {

  constructor(private bluecardservice:BluecardService) { }
ident:number;
libelle:string;
img:string;
prix:number;
bool:boolean;
race:string;
gender:string;
date:Date;
message="";
  ngOnInit() {
  }
onSubmit(f:NgForm){
  const ajout=this.bluecardservice.addProduit(this.ident,this.libelle,this.img,this.prix,this.bool,this.race,this.gender,this.date);
  if(ajout)
  this.message="Le produit d'id "+this.ident+" a bien ete ajouté";
  else 
  this.message="Le produit d'id "+this.ident+" existe deja";
}
}
