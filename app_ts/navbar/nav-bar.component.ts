import {Component, OnInit} from '@angular/core';
import { ROUTER_DIRECTIVES} from '@angular/router';
import {Control} from '@angular/common';
import{ContactServiceComponent} from '../service/contact.service';
import{DataHandlerService} from '../service/data-handler.service';
import {Subject} from "rxjs/Subject";

@Component({
    selector:'nav-bar',
    templateUrl:'app_ts/navbar/navbar.html',
    directives: [ROUTER_DIRECTIVES],
})

export class NavBarComponent implements OnInit{
    private searchField = new Control();
    private search:string;
    private searchStream = new Subject<string>();
    private errorMessage: string;
    
    constructor(private _contactService:ContactServiceComponent,
                  private _dataHandlerService: DataHandlerService){}
    
    
 ngOnInit(): any{
        this.searchStream
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(term => this._dataHandlerService.changeNav(term))
            .subscribe(
                content => '',
                error => this.errorMessage = <any>error
                    )
            }
            
  updateValue(){
              this.searchStream.next(this.searchField.value); 
        }  

}