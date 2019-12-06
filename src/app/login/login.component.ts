import { Component, OnInit } from '@angular/core';
import {BluecardService} from 'D:/tptp/tp5/projet/src/app/bluecard.service';
import { NgForm } from '@angular/forms';
// import { truncate } from 'fs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
l:any;
mdp:string;
us:string;
submitted:boolean=false;

  constructor(private bluecardservice:BluecardService) { 
    
  }
  onSubmit(f:NgForm){
    this.submitted=true;
  const check=this.bluecardservice.check(this.us,this.mdp);
  if(check==true){
  return true;}
  else {return false;}

}
  ngOnInit() {
    this.l=this.bluecardservice.log;
    
  }

}
