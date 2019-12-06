import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BluecardService} from '../bluecard.service';
@Component({
  selector: 'app-affiche',
  templateUrl: './affiche.component.html',
  styleUrls: ['./affiche.component.css']
})
export class AfficheComponent implements OnInit {
ident:number;

cards:any;
  constructor(private activatedRoute:ActivatedRoute, private bluecardservice:BluecardService) { }

  ngOnInit() {
    this.ident=this.activatedRoute.snapshot.params['id'];
    this.cards=this.bluecardservice.cards;
   
  }

}
