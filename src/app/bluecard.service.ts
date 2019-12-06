import { Injectable } from '@angular/core';
import {toofar} from 'D:/tptp/tp5/projet/src/app/toofar';
import {Test} from 'D:/tptp/tp5/projet/src/app/p1/test';
@Injectable({
  providedIn: 'root'
})
export class BluecardService {
  cards = [
    new toofar(12345, 'Konner', '../assets/d1.png',2699, true,"Male","German shedpred",new Date(2019,3,2)),
    new toofar(12587, 'Jyn', '../assets/d2.png',2699, false,"Male","Labrador Retriever",new Date(2017,4,9)),
    new toofar(85719, 'Ellie May','../assets/d3.png',699, false,"Female","Maltzu",new Date(2017,12,1)),
    new toofar(45879, 'Polar', '../assets/d4.png',1696, true,"Male","Mackenzie River Husky",new Date(2018,1,30)),
    new toofar(48956,'Buddy','../assets/c4.jpg',1700,false,"Male","Bichon Frise",new Date(2018,11,30))];
  log=['Souid','aabdou'];
  public check(x:string,y:string):boolean{
    if((this.log[0]==x)&&(this.log[1]==y)){
      return true;
    }
    else{
      return false;
    }
  }
  public getProduitById(id:number):toofar{
    for(let t of this.cards){
      if(t._id===id){
        return t;
      }
    }
    return null;
  }
  public addProduit(id:number,libelle:string,img:string,prix:number,bool:boolean,race:string,gender:string,dat:Date):boolean{
    if(this.getProduitById(id)==null){
      this.cards.push(new toofar(id,libelle,img,prix,bool,race,gender,dat));
      return true;
    }
    return false;
  }
  public remove(f:number){
    for (let i=0;i<this.cards.length;i++){
     if(f==i)
      {this.cards.splice(f,1);}
    }
  }
  public modifer(id: number, libelle: string, prix:number) {
    for (let i = 0; i < this.cards.length; i++)
      if (this.cards[i]._id == id) {
        this.cards[i]._libelle = libelle;
        this.cards[i]._prix=prix;
        }
      }
  
  constructor() { }
}
