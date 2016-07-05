import {Component, OnInit} from '@angular/core';
import { ROUTER_DIRECTIVES, Router, ActivatedRoute} from '@angular/router';

import {IContent} from './content-element';
import {ContactServiceComponent} from '../service/contact.service';

@Component({
    templateUrl:'app_ts/content/singleContentElement.html',
    styleUrls:['src/css/singleContentElement.css'],
    directives: [ROUTER_DIRECTIVES]
})

export class SingleContentComponent implements OnInit{
     content: IContent;
     content1: IContent [];
     errorMessage: string;
     private sub: any;
     constructor(
        private _contactService:ContactServiceComponent,
        private _router: Router,
        private route: ActivatedRoute){
    }
    
    onBack(){
        this._router.navigate(['/content']);
    }

    getContent(id: number){
       this._contactService.getContent(id)
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