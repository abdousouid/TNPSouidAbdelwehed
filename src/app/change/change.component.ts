import { Component, OnInit } from '@angular/core';
import {BluecardService} from 'D:/tptp/tp5/projet/src/app/bluecard.service';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.css']
})
export class ChangeComponent implements OnInit {
ident:number;
lib:string;
p:number;

  constructor(private bluecardservice:BluecardService) { }

  ngOnInit() {
  }
onSubmit(ident:number,lib:string,p:number){
  this.bluecardservice.modifer(this.ident,this.lib,this.p);
}
}
