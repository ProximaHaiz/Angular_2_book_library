import {Component,OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES, Router,ActivatedRoute } from '@angular/router';
import {PaginationComponent} from './pagination.component';
import { SingleContentComponent} from './singleContentElement.component';
import {ContactServiceComponent} from '../service/contact.service';
import {ContentFilterPipe} from './pipes/content-filter.pipe';
import {Subject} from "rxjs/Subject";
@Component({
    templateUrl:'app_ts/content/mainContent.html',
    styleUrls:['src/css/content.css'],
    directives:[ROUTER_DIRECTIVES,PaginationComponent],
    pipes: [ContentFilterPipe],
    inputs: ['model'],
})

export class MainContentComponent implements OnInit{
      contents: string [];
      errorMessage: string;
      searchString:string;
      private searchStream = new Subject<string>();
      private sub: any;
    
      constructor(private _contactService:ContactServiceComponent,
      private router: Router,
      private route: ActivatedRoute){}

  

    getContentByCategory(category:any){
            this._contactService.getProductByCategory(category)
                .subscribe(
                    content => this.contents = content,
                    error => this.errorMessage = <any>error);
    }
     
    //  getContent(){
    //      this._contactService.getContents()
    //      .subscribe(
    //          content => this.contents = content,
    //          error => this.errorMessage = <any>error);
    //  }
     ngOnInit() {
    //   this. getContent();
      this.sub = this.route.params.subscribe(params =>{
          let category = params['category'];
          this.getContentByCategory(category);
           console.log('ngOnInit main-component, category:'+category)
      })
      
      
      
     
      
        // this.searchString = this._contactService.getData();
        // console.log('search string from ngOnInit: '+this.searchString);
        //     this.searchStream
        //     .debounceTime(300)
        //     .distinctUntilChanged()
        //     .switchMap((input: string)=>this._contactService.getProductBySearch(input))
        //     .subscribe(
        //         data => this.contents = data
        //     );    
     }
     
     search(data: any){
         console.log(data);
         this.searchStream.next(data);
     }
}