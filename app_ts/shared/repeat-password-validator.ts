import { HTTP_PROVIDERS, Http } from '@angular/http';
import {Injector} from '@angular/core';
import {Control} from '@angular/common';
import {Observable} from 'rxjs/Rx';
import 'rxjs/Rx';
<<<<<<< HEAD
// import { ValidatorFn, AsyncValidatorFn } from '@angular/common/src/forms/directives/validators';
=======
import { ValidatorFn, AsyncValidatorFn } from '@angular/common/src/forms/directives/validators';
>>>>>>> 3e9a155e50098a842d7970c1c765342429c52d5b



export class RepeatPasswordValidator{
    
    
    static checkRepeatPassword(control:Control, source:string):{[s:string]:boolean}{
        
        if(control.value!=source){
            return {'invalid confirm password':true};
        }
    }
    
    
}

