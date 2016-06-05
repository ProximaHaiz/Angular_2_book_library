import {Component} from '@angular/core'

@Component({
    templateUrl:'app_ts/content/content.html',
    styleUrls:['src/css/content.css']
})

export class ContentComponent{
    categories: string[];
    public pageTitle: string = 'InStep Movie Hunter';
    names: string [];
    header: string;
    
    constructor(){
        this.categories = [
            'Насосы','Клапаны','Распределители',
            'Гидромоторы','Гидростанции','Фильтры',
            'Пневматика'];
            
            this.names = [
                'Vova','Max','Lesha'
            ];
            
    
    }
}