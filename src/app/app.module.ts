import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { CategoriesComponent } from './categories/categories.component';
import { CarouselComponent } from './carousel/carousel.component';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { DealsComponent } from './deals/deals.component';
import { CouponComponent } from './coupon/coupon.component';
import { TrendingComponent } from './trending/trending.component';
import { DayliDealsComponent } from './dayli-deals/dayli-deals.component';
import { AdComponent } from './ad/ad.component';
import { AboutComponent } from './about/about.component';
import { routing } from './app.routing';
import { HomeComponent } from './home/home.component';
import { NewAdComponent } from './new-ad/new-ad.component';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { ShowAdsComponent } from './show-ads/show-ads.component';
import { FooterComponent } from './footer/footer.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SearchComponent,
    CategoriesComponent,
    CarouselComponent,
    DealsComponent,
    CouponComponent,
    TrendingComponent,
    DayliDealsComponent,
    AdComponent,
    AboutComponent,
    HomeComponent,
    NewAdComponent,
    ShowAdsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    Ng2CarouselamosModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
