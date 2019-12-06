import { Component, OnInit } from '@angular/core';
import {BluecardService} from '../bluecard.service';
import {ActivatedRoute} from '@angular/router';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  c:any;
  
 

  constructor(private activatedRoute:ActivatedRoute,private bluecardservice:BluecardService) { }
  
  ngOnInit() {
    this.c=this.bluecardservice.cards;
  
  }
 
}
