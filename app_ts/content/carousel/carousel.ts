import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {IContent} from '../../content/content-element';
import {ProductServiceComponent} from '../../service/product.service';

@Component({
    selector:'carousel',
    templateUrl:'app_ts/content/carousel/carousel.html',
     styleUrls:['src/css/carousel.css'],
     directives:[ROUTER_DIRECTIVES]
})

export class CarouselComponent implements OnInit{
   content: IContent [];
   
   constructor(private _contactService:ProductServiceComponent){}
   getRandomContent(){}
   
   ngOnInit(){}
}
