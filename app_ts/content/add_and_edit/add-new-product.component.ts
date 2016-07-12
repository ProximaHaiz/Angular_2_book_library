import {Component, OnInit} from '@angular/core';
import { ROUTER_DIRECTIVES, Router, ActivatedRoute} from '@angular/router';
import {
     FormBuilder,
     Validators,
     FormControl,
     FormGroup, REACTIVE_FORM_DIRECTIVES 
} from '@angular/forms';
import{ProductServiceComponent} from '../../service/product.service';
import { IContent } from '../content-element'

@Component({
    selector:'add-new-product',
    templateUrl:'app_ts/content/add_and_edit/add-product.html',
    directives: [ROUTER_DIRECTIVES,REACTIVE_FORM_DIRECTIVES]
})

export class AddNewProduct implements OnInit{
    private sub: any;
    private productForm: FormGroup;
    private product: IContent; 

     constructor(
        private _fb: FormBuilder,
        private _router: Router,
        private _route: ActivatedRoute,
        private _productService: ProductServiceComponent){
            this.product = new IContent();
            this.productForm = _fb.group({
            productName: new FormControl(this.product.name, Validators.required),
            productId:new FormControl(this.product.contentId ,Validators.required),
            imageUrl:new FormControl(this.product.imageurl ,Validators.required),
            title:new FormControl(this.product.title ,Validators.required),
            price:new FormControl(this.product.price ,Validators.required),
            category:new FormControl(this.product.category ,Validators.required),
            description:new FormControl(this.product.description ,Validators.required)
        });
    }

        ngOnInit(){
         console.log('singleContentElement ngOnInit')
            this.sub = this._route.params.subscribe(params =>{
                let id = +params['id'];
                console.log("id="+id)
               
            })
     } 
     submit(){
        console.log(this.productForm.value);
        this._productService.createNewProduct(this.productForm.value)
        .subscribe(data => {
            console.log('product created: '+data)
        })
        // this._contactService.loginUser(this.productForm.value)
        // .subscribe(data =>{
        //     console.log('loginForm have been send');
        // });
     }

}