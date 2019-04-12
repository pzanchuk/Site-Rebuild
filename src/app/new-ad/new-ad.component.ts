import { Component, OnInit } from '@angular/core';
import { Ad } from '../models/ad.model';

@Component({
  selector: 'app-new-ad',
  templateUrl: './new-ad.component.html',
  styleUrls: ['./new-ad.component.css']
})
export class NewAdComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submitForm(title: string, text: string){
  let newAd: Ad = new Ad(title, text);
  }

}
