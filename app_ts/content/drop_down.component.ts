import {Component} from '@angular/core'

@Component({
    template:`
<div class="sidebar">
      <ul class="dropdown-menu" style="display: block; position: static;">  
      <li class="dropdown-submenu active"><a href="#">toyota highlander</a>
        <ul class="dropdown-menu">
                <li class="dropdown-submenu">
                <a href="/search/57/atlanta/">atlanta</a>
                <ul class="dropdown-menu">
                <li><a href="/search/54/raleigh/">raleigh</a></li>
                <li><a href="/search/54/sacramento/">sacramento</a></li>
                <li><a href="/search/54/sandiego/">sandiego</a></li>
                <li><a href="/search/54/seattle/">seattle</a></li>
        </ul>
                
                
                </li>
                <li><a href="/search/57/austin/">austin</a></li>
                <li><a href="/search/57/boston/">boston</a></li>
                <li><a href="/search/57/chicago/">chicago</a></li>
                <li><a href="/search/57/seattle/">seattle</a></li>
        </ul>
      </li>
      <li><a href="/search/56" class=" ">honda fit </a></li>
      <li class="dropdown-submenu"><a tabindex="-1" href="#">ford explorer </a>
        <ul class="dropdown-menu">
                <li><a href="/search/54/raleigh/">raleigh</a></li>
                <li><a href="/search/54/sacramento/">sacramento</a></li>
                <li><a href="/search/54/sandiego/">sandiego</a></li>
                <li><a href="/search/54/seattle/">seattle</a></li>
        </ul>
      </li>
     </ul>
</div>

<div class="dropdown locate {{color}}">
<input class="form-control" (keyup)="event(val.value)" #val type="text"/>
  <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Dropdown Example
  <span class="caret"></span></button>
        <ul class="dropdown-menu">
                <li ><a href="#">HTML</a></li>
                <li><a href="#">CSS</a></li>
                <li><a href="#">JavaScript</a></li>
        </ul>

        <h3>color:{{color}}</h3>
</div>
        



    `,
    styleUrls:['src/css/content.css']
})

export class DropDownComponent{
    categories: string[];
    color:string='red';
  
    constructor(){
        this.categories = [
            'Nasosy','Клапаны','Распределители',
            'Гидромоторы','Гидростанции','Фильтры',
            'Пневматика'];
            
    }

    event(value:string){
        this.color=value;
    }
}

