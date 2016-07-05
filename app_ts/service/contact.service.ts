import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { Http, Response, Headers, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {ContactComponent} from '../login/contact';
import {Categories} from '../content/categories/categories';
import {IContent} from '../content/content-element';
import {CONTENT_ITEMS} from '../content/content-data';
import {InputData} from './input-search-data';
=======
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {ContactComponent} from '../login/contact';
import {Categories} from '../content/categories';
>>>>>>> 3e9a155e50098a842d7970c1c765342429c52d5b

import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

<<<<<<< HEAD
export interface myData {
   name:string;
}

@Injectable()
export class ContactServiceComponent{
    sharingData: myData={name:"nyks"};
    private _apiUrl = 'http://localhost:8083/api/';
    apiHeaders = new Headers({
=======

@Injectable()
export class ContactServiceComponent{
    private _apiUrl = 'http://localhost:8083/api/';
      apiHeaders = new Headers({
>>>>>>> 3e9a155e50098a842d7970c1c765342429c52d5b
    'Content-Type': 'application/json'
  });
    constructor(private _http: Http){}
    
<<<<<<< HEAD
    private _contentUrl = 'app_ts/content/content.json';
    
     saveData(str: string){
        //   console.log('save data function called' + str + this.sharingData.name);
          this.sharingData.name=str; 
        }
     getData():string{
            // console.log('get data function called');
        return this.sharingData.name;
        }
    
    
    
    getSearchContent(search:string){
         return this._http.get(this._contentUrl)
            .map(res => this.transformBySearchString(res, search))
            .do(data => console.log(CONTENT_ITEMS.push()))
            .catch(this._handleError);
    }
    
     getContents() {
        return this._http.get(this._apiUrl+"products")
            .map(res => <IContent[]> res.json())
            .do(data => console.log(data))
            .catch(this._handleError);
    }
    
        getContent(id:number){
            let params = new URLSearchParams();
            params.set('productId',id+'');
        return this._http.get(this._apiUrl+"product",{search:params})
            .map(res => <IContent> res.json())
            .do(data => console.log('Data: ' + JSON.stringify(data)))
            .catch(this._handleError);
    }
    
=======
>>>>>>> 3e9a155e50098a842d7970c1c765342429c52d5b
    loginUser(user: any){
        const loginUrl = this._apiUrl+'login';
        console.log('User send:'+ user)
        
<<<<<<< HEAD
        return this._http.post(loginUrl,JSON.stringify(user))
        .map(res => res.json())
        .catch(this._handleError);
=======
        return this._http.post(loginUrl,JSON.stringify(user),
        {headers: this.apiHeaders})
        .map(res => res.json())
        .catch(this._handleError);
        
>>>>>>> 3e9a155e50098a842d7970c1c765342429c52d5b
    }
    
  private  _handleError(error: any) {
    console.error(error);
    return Observable.throw(error.json().message || 'Server error');
  }
<<<<<<< HEAD
  
  getProduct(id: number){
    const categoriesUrl = this._apiUrl+'product';
        return this._http.get(categoriesUrl)
            .map(res => <IContent>res.json())
            .do(data=>console.log('Data: '+JSON.stringify(data)))
            .catch(this._handleError)
  }
  
  

  getAllCategories(){
    const categoriesUrl = this._apiUrl+'categories';
    return this._http.get(categoriesUrl)
    .map(res => <Categories[]>res.json())
    .do(data=>console.log(data+''+new Date().getMilliseconds()))
    .catch(this._handleError)
  } 

  getProductBySearch(search:string){
      return this._http.get(this._contentUrl)
            .map(res => this.transformBySearchString(res, search))
            .do(data => console.log('Data: ' + JSON.stringify(data)))
            .catch(this._handleError);  
  }

     getProductByCategory(category:string){
      return this._http.get(this._apiUrl+"products")
            .map(res => this.transformByCategory(res, category))
            .do(data => console.log('Products by category: ' + JSON.stringify(data)))
            .catch(this._handleError);
  }
  
     private  transformBySearchString(value: any, filter: string): IContent[] {
         let data = <IContent[]> value.json();
        filter = filter ? filter.toLocaleLowerCase() : null;
        return filter ? data.filter((content: IContent) =>
            content.name.toLocaleLowerCase().search(filter) !== -1) : data;
      }

     private transformByCategory(value: any, filter: string): IContent[] {
            let data = <IContent[]> value.json();
            data.forEach(element => {
                element.description = '';
            });
            filter = filter ? filter.toLocaleLowerCase() : null;
            return filter ? data.filter((content: IContent) =>
                content.category.toLocaleLowerCase().search(filter) !== -1) : data;
      }
=======

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
>>>>>>> 3e9a155e50098a842d7970c1c765342429c52d5b
}