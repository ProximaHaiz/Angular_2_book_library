import{Component,OnInit} from '@angular/core';
import {ContactServiceComponent} from '../../service/contact.service';
import { ROUTER_DIRECTIVES} from '@angular/router';
import {MainContentComponent} from '../main_content/main-content.component';

@Component({
    selector:'categories',
    templateUrl:'app_ts/content/categories/categories.html',
    styleUrls:['src/css/content.css'],
    directives:[ROUTER_DIRECTIVES],

})
// @Routes([
//     { path: '/:category', component: MainContentComponent },
// ])
export class Categories implements OnInit{
   categories: Categories[];
   errorMessage: string;
    constructor(private _contactService:ContactServiceComponent){}
      getCategories(){
            this._contactService.getAllCategories()
                .subscribe(
                    categories => this.categories = categories,
                    error => this.errorMessage = <any>error)
                    console.log('from getCategories');
    }
    
       ngOnInit() {
         this.getCategories();
        console.log(' OnInit')
     }

}