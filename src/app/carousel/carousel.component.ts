import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  items: Array<any> = [];

  constructor(){
    this.items = [
      { name: '../assets/img/carousel3.jpg' },
      { name: '../assets/img/carousel2.jpg' },
      { name: '../assets/img/carousel1.jpg' },
    ];
  }

}
