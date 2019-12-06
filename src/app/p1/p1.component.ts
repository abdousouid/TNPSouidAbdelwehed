import { Component, OnInit } from '@angular/core';
import {BluecardService} from 'D:/tptp/tp5/projet/src/app/bluecard.service'
@Component({
  selector: 'app-p1',
  templateUrl: './p1.component.html',
  styleUrls: ['./p1.component.css']
})
export class P1Component implements OnInit {
c:any;
  constructor(private bluecardservice:BluecardService) { }
i:number;
  ngOnInit() {
    this.c=this.bluecardservice.cards;
  }
ondelete(i:number){
  this.bluecardservice.remove(i);
}
}
