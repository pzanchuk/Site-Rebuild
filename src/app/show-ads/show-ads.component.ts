import { Component, OnInit } from '@angular/core';
import { AdService } from '../ad.service';
import { Router } from '@angular/router';
import { Ad } from '../models/ad.model';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-show-ads',
  templateUrl: './show-ads.component.html',
  styleUrls: ['./show-ads.component.css'],
  providers: [AdService]
})
export class ShowAdsComponent implements OnInit {

  ads: FirebaseListObservable<any[]>;

  constructor(private router: Router, private adService: AdService) { }

  ngOnInit() {
    this.ads = this.adService.getAds();
  }

}
