import {Component} from '@angular/core';
import { Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router';
import {PaginationComponent} from './pagination.component'

@Component({
    templateUrl:'app_ts/content/mainContent.html',
    styleUrls:['src/css/content.css'],
    directives:[ROUTER_DIRECTIVES,PaginationComponent]
})

export class MainContentComponent{
      names: string [];
     constructor(){
       
            this.names = [
                'Vova','Max','Lesha',
                 'Vova','Max','Lesha',
                 'Vova','Max','Lesha',
                  'Vova','Max','Lesha',
                   'Vova','Max','Lesha',
                    'Vova','Max','Lesha'
            ];
    }
}