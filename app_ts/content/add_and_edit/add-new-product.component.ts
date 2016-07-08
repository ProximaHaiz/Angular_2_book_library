import {Component, OnInit} from '@angular/core';
import { ROUTER_DIRECTIVES, Router, ActivatedRoute} from '@angular/router';
import {
      FormBuilder,
     ControlGroup,
     Control,
     Validators,
     FORM_DIRECTIVES } from '@angular/common';

@Component({
    selector:'add-new-product',
    templateUrl:'app_ts/content/add_and_edit/add-product.html',
    directives: [ROUTER_DIRECTIVES,FORM_DIRECTIVES]

})

export class AddNewProduct implements OnInit{
    sub: any;
    productForm: ControlGroup;

     constructor(
        private _router: Router,
        private route: ActivatedRoute){
            this.productForm = new ControlGroup({
                
            })
    }

        ngOnInit(){
         console.log('singleContentElement ngOnInit')
            this.sub = this.route.params.subscribe(params =>{
                let id = +params['id'];
                console.log("id="+id)
               
            })
     } 
     submit(){}

}