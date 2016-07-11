import {Component,OnInit, OnDestroy} from '@angular/core';
import {ROUTER_DIRECTIVES, Router,ActivatedRoute } from '@angular/router';
import {PaginationComponent} from '../pagination.component';
import { SingleContentComponent} from '../single_element/single-product.component';
import {ProductServiceComponent} from '../../service/product.service';
import {DataHandlerService} from '../../service/data-handler.service'
import {ContentFilterPipe} from '../pipes/content-filter.pipe';
import { AddNewProduct } from '../add_and_edit/add-new-product.component';

import {Subject} from "rxjs/Subject";
import {Subscription} from 'rxjs/Subscription';
@Component({
    templateUrl:'app_ts/content/main_content/mainContent.html',
    styleUrls:['src/css/content.css'],
    directives:[ROUTER_DIRECTIVES,PaginationComponent, AddNewProduct],
    pipes: [ContentFilterPipe],
    inputs: ['model'],
})

export class MainContentComponent implements OnInit, OnDestroy{
      private contents: string [];
      private errorMessage: string;
      private searchString:string;
      private searchStream = new Subject<string>();
      private sub: Subscription;
      private  subscription:Subscription;
    
      constructor(private _productService:ProductServiceComponent,
                  private _navService:DataHandlerService,
                  private _router: Router,
                  private _route: ActivatedRoute){}

  

   private getContentByCategory(category:any){
            this._productService.getProductByCategory(category)
                .subscribe(
                    content => this.contents = content,
                    error => this.errorMessage = <any>error);
    }
    
   private getContentBySearch(search:string){
        console.log('getContentBySearch:'+search)
            this._productService.getProductBySearch(search)
                .subscribe(
                    content => this.contents = content,
                    error => this.errorMessage = <any>error);
    }
    
  ngOnDestroy() {
    // prevent memory leak when component is destroyed
    console.log('TestComponent - Destroy')
    this.subscription.unsubscribe();
    this.sub.unsubscribe();
  }
     
   ngOnInit() {
      this.sub = this._route.params.subscribe(params =>{
          let category = params['category'];
          this.getContentByCategory(category);
           console.log('ngOnInit main-component, category:'+category)
      });
      
       this.subscription = this._navService.navItem$.subscribe(
       item => this.getContentBySearch(item));  
     }
}