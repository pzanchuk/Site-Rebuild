import { Component, OnInit } from '@angular/core';
import { Ad } from '../models/ad.model';
import { AdService } from '../ad.service';

@Component({
  selector: 'app-new-ad',
  templateUrl: './new-ad.component.html',
  styleUrls: ['./new-ad.component.css'],
  providers: [AdService]
})
export class NewAdComponent implements OnInit {

  constructor(private adService: AdService) { }

  ngOnInit() {
  }

  submitForm(title: string, text: string){
    let newAd: Ad = new Ad(title, text);
    this.adService.saveAd(newAd);
  }

}
