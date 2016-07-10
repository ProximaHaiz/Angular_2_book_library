import {Component, OnInit} from '@angular/core';
import { ROUTER_DIRECTIVES, Router, ActivatedRoute} from '@angular/router';
import {IContent} from '../content-element';
import {ProductServiceComponent} from '../../service/product.service';

@Component({
    templateUrl:'app_ts/content/single_element/single-product.html',
    styleUrls:['src/css/singleContentElement.css'],
    directives: [ROUTER_DIRECTIVES]
})

export class SingleContentComponent implements OnInit{
     content: IContent;
     content1: IContent [];
     errorMessage: string;
     private sub: any;
     constructor(
        private _productService:ProductServiceComponent,
        private _router: Router,
        private route: ActivatedRoute){
    }
    
    onBack(){
        this._router.navigate(['/content']);
    }

    getContent(id: number){
       this._productService.getProduct(id)
            .subscribe(
                cont => this.content = <IContent>cont,
                error => this.errorMessage = <any>error);
    }
    

     ngOnInit(){
         console.log('singleContentElement ngOnInit')
            this.sub = this.route.params.subscribe(params =>{
                let id = +params['id'];
                console.log("id="+id)
                this.getContent(id);
            })
     } 
}