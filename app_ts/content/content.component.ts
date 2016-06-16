import {Component,OnInit} from '@angular/core';
import{PaginationComponent} from './pagination.component';
import { Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router';
import {SingleContentComponent} from './singleContentElement.component';
import{MainContentComponent} from './main-content';
import {ContactServiceComponent} from '../service/contact.service';
import {Categories} from './categories'

@Component({
    templateUrl:'app_ts/content/content.html',
    styleUrls:['src/css/content.css'],
    directives:[PaginationComponent,ROUTER_DIRECTIVES],
    
})
@Routes([
    { path: '/contentElement', component: SingleContentComponent },
    { path: '/', component: MainContentComponent },
    
])

export class ContentComponent implements OnInit{
        categories: Categories[];
        errorMessage: string;
    public pageTitle: string = 'InStep Movie Hunter';
   
    header: string;
    constructor(private _contactService:ContactServiceComponent ){
           
    }

    getCategories(){
            this._contactService.getAllCategories()
                .subscribe(
                    categories =>this.categories = categories,
                    error => this.errorMessage = <any>error)
    }

    ngOnInit() {
         this.getCategories();
        //  console.log(this.categories);
        //  for (var index = 0; index < this.categories.length; index++) {
        //      var element = this.categories[index];
        //      console.log(element.categoryName);
        //  }
        // for(let cat of this.categories){
        //     console.log(cat.categoryName);
        // }
     }

    refClick(ref:string){
        console.log(ref);
    }

    onFocus(value:string){
        console.log('focus grented, value:'+value)
    }
}