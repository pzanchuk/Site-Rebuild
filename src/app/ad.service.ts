import { Injectable } from '@angular/core';
import { Ad } from './models/ad.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class AdService {

  ads: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.ads = database.list('ads');
  }

  getAds() {
    return this.ads;
  }

  saveAd(newAd: Ad){
    this.ads.push(newAd);
  }
}
