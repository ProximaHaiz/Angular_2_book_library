import {Component, OnInit} from '@angular/core';
import {
     ROUTER_DIRECTIVES,
     OnActivate,
     RouteSegment } from '@angular/router';
import {
     FormBuilder,
     ControlGroup,
     Control,
     Validators,
     FORM_DIRECTIVES } from '@angular/common';
import{RegistrationContact} from './registration-contact'
import{ContactServiceComponent} from '../service/contact.service'
import {Http} from '@angular/http';
import{RepeatPasswordValidator} from '../shared/repeat-password-validator'

@Component({
    templateUrl:'app_ts/registration/registration.html',
styleUrls:['src/css/signin.css'],
directives: [ROUTER_DIRECTIVES,FORM_DIRECTIVES]
    }
)
 export class RegistrationFormComponent implements OnInit{
        registerForm: ControlGroup;
       private pageTitle: string = '';
         passwordControl :Control;
        
        formError: { [id: string]: string };
        private _validationMessages: { [id: string]: { [id: string]: string } };
        errorMessage: string;
        
        registerContact: RegistrationContact;
        
        constructor(private _fb: FormBuilder,
                    private _contactService:ContactServiceComponent){
            this.formError = {
            'email': '',
            'password': '',
            'repeat_password':''
        };
        console.log('from constructor');
        this.pageTitle = 'hello Vova';
        this.print();
         console.log(this.pageTitle);
        this.registerContact = new RegistrationContact();
        
       this.passwordControl = new Control(this.registerContact.password,
                    Validators.compose([Validators.required, Validators.minLength(8)]));
        
        this.registerForm = _fb.group({
            email: new Control(this.registerContact.email,
                    Validators.compose([Validators.required, Validators.minLength(4)])),
            password: this.passwordControl,
             repeat_password: new Control(this.registerContact.repeat_password,
                    Validators.compose([Validators.required]))},
                   {validator: matchingPasswords('password','repeat_password')});
                    // Validators.required, Validators.minLength(8),

        
        
        this._validationMessages = {
            'email': {
                'required': 'email is required',
                'minlength': 'email must be at least four characters.',
                'maxlength': 'email cannot exceed 50 characters.'
            },
            'password': {
                'required': 'Password is required',
                'minlength': 'Password must be at least 8 characters.',
                'maxlength': 'Password cannot exceed 50 characters.'
            },
            'repeat_password': {
                'required': 'Password is required',
                'notequal': 'Password must be equal to password',
            }
        };
        
         this.registerForm.valueChanges
                .debounceTime(200)
                .subscribe(data => this.onValueChanged(data));
    }  
    /**
     * The following method checks for errors on the 'loginForm'. If error detected, it push to the 
     * formError binding with current 'field'
     */
    onValueChanged(data: any) {
        for (let field in this.formError) {
            if (this.formError.hasOwnProperty(field)) {
                let hasError = this.registerForm.controls[field].dirty &&
                    !this.registerForm.controls[field].valid;
                    console.log('from controls:'+this.registerForm.value.password)
                this.formError[field] = '';
                if (hasError) {
                 
                    for (let key in this.registerForm.controls[field].errors) {
                           if(field=='repeat_password'){
                        // console.log('repat_error:'+key)
                    }
                     console.log('repat_error:'+key)

                        if (this.registerForm.controls[field].errors.hasOwnProperty(key)) {
                            this.formError[field] += this._validationMessages[field][key] + ' ';
                        }
                    }
                }
            }
        }
        console.log('repat_error:'+this.registerForm.hasError('notequal'));

        if(this.registerForm.hasError('notequal')&&this.registerForm.controls['repeat_password'].value!==''){
            this.formError['repeat_password']=this._validationMessages['repeat_password']['notequal'];
        }
    }
    
    
    
    ngOnInit(): any{
        // this.newContact = new ContactComponent();
        this.passwordControl = new Control(this.registerContact.password,
                    Validators.compose([Validators.required, Validators.minLength(8)]));
    }
    
    login(){
        console.log(this.registerForm.value);
        this._contactService.loginUser(this.registerForm.value)
        .subscribe(data =>{
            console.log('loginForm have been send');
        });
    } 
    
    
    // function checkRepeatPassword(control:Control, source:string):{[s:string]:boolean}{
        
    //     if(control.value!=source){
    //         return {'invalid confirm password':true};
    //     }
    // }  
    doCheckRepeatPassword(control:Control){
        console.log('before print');
           console.log('after print');
        console.log('from doCheckRepeatPassword:');
        return checkRepeatPassword(control,'');
    }
    
    print(){
        console.log('from doCheckRepeatPassword:');
    }
}
function checkRepeatPassword(control:Control, source:string):{[s:string]:boolean}{
        
        if(control.value!=source){
            // this.formError['repeat_password']=+'invalid confirm password';
            return {'notequal':true};
            
        }
    } 

    function matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
  return (group: ControlGroup): {[key: string]: any} => {
    let password = group.controls[passwordKey];
    let confirmPassword = group.controls[confirmPasswordKey];
    console.log('password:'+password.value+', repeat_password:'+confirmPassword.value)

    if (password.value !== confirmPassword.value) {
        console.log('Error!')
      return {
        'notequal': true
      };
    }
  }
} 