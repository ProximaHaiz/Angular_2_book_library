import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {ContactComponent} from '../login/contact';
import {Categories} from '../content/categories';

import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class ContactServiceComponent{
    private _apiUrl = 'http://localhost:8083/api/';
      apiHeaders = new Headers({
    'Content-Type': 'application/json'
  });
    constructor(private _http: Http){}
    
    loginUser(user: any){
        const loginUrl = this._apiUrl+'login';
        console.log('User send:'+ user)
        
        return this._http.post(loginUrl,JSON.stringify(user),
        {headers: this.apiHeaders})
        .map(res => res.json())
        .catch(this._handleError);
        
    }
    
  private  _handleError(error: any) {
    console.error(error);
    return Observable.throw(error.json().message || 'Server error');
  }

  getAllCategories(){
    const catUrl = 'app_ts/content/categories.json';
    const categoriesUrl = this._apiUrl+'categories';
    return this._http.get(categoriesUrl)
    .map(res => <Categories[]>res.json())
    .do(data=>console.log(data))
    .catch(this._handleError)
  } 

  getProductByCategory(category:string){
      // return this._http.get(this._apiUrl+)
  }
}