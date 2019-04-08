import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { CategoriesComponent } from './categories/categories.component';
import { CarouselComponent } from './carousel/carousel.component';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SearchComponent,
    CategoriesComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    Ng2CarouselamosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
