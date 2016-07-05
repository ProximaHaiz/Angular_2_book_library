import {Component,OnInit, AfterContentInit, AfterViewInit,DoCheck} from '@angular/core';
import {PaginationComponent} from './pagination.component';
import { ROUTER_DIRECTIVES, Router,CanActivate  } from '@angular/router';
import {SingleContentComponent} from './singleContentElement.component';
import {MainContentComponent} from './main-content';
import {ContactServiceComponent} from '../service/contact.service';
import {Categories} from './categories/categories';
import {CarouselComponent} from './carousel/carousel';
import {IContent} from './content-element'

@Component({
    templateUrl:'app_ts/content/content.html',
    styleUrls:['src/css/content.css','src/css/carousel.css'],
    directives:[PaginationComponent,ROUTER_DIRECTIVES,Categories,CarouselComponent],
    
})
// @Routes([
//     { path: '/', component: MainContentComponent },
//     { path: '/contentElement/:id', component: SingleContentComponent },
//     { path: '/:category', component: MainContentComponent },
    
// ])

export class ContentComponent   {
        categories: Categories[];
        errorMessage: string;
        contents:IContent;
        message:string = 'message';
        contentsArray: string [];
        

    header: string;
    constructor(private _contactService:ContactServiceComponent,
    private _router: Router){}
    
      getContent(data:string){
          console.log('search by: '+data);
         this._contactService.getProductBySearch(data)
         .subscribe(
             content => this.contentsArray = content,
             error => this.errorMessage = <any>error);
     }
     
     send(data:string){
         console.log(data);
        //  this._contactService.saveData(data);
        //  this._router.navigate(['/content'])
        this.getContent(data);   
     }
    }