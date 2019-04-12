import { Component, OnInit } from '@angular/core';
import { AdService } from '../ad.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-ads',
  templateUrl: './show-ads.component.html',
  styleUrls: ['./show-ads.component.css'],
  providers: [AdService]
})
export class ShowAdsComponent implements OnInit {

  constructor(private router: Router, private adService: AdService) { }

  ngOnInit() {
  }

}
