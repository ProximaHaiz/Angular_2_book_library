import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {ContactComponent} from '../login/contact';
import {Categories} from '../content/categories/categories.component';
import {IContent} from '../content/content-element';
import {CONTENT_ITEMS} from '../content/content-data';
import { API_URL } from './urls';

export abstract class AbstractService{
    constructor(){

    }

   protected  _handleError(error: any) {
    console.error(error);
    return Observable.throw(error.json().message || 'Server error');
  }
}