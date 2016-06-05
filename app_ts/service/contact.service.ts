import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {ContactComponent} from '../login/contact';

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
    
    _handleError(error: any) {
    console.error(error);
    return Observable.throw(error.json().message || 'Server error');
  }
}