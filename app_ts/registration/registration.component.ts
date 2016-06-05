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

@Component({
    templateUrl:'app_ts/registration/registration.html',
styleUrls:['src/css/signin.css'],
directives: [ROUTER_DIRECTIVES,FORM_DIRECTIVES]
    }
)
 export class RegistrationFormComponent implements OnInit{
        loginForm: ControlGroup;
        public pageTitle: string;
        
        formError: { [id: string]: string };
        private _validationMessages: { [id: string]: { [id: string]: string } };
        errorMessage: string;
        
        registerContact: RegistrationContact;
        
        constructor(private _fb: FormBuilder,
                    private _contactService:ContactServiceComponent){
            this.formError = {
            'email': '',
            'password': '',
            'reset_password':''
        };
        this.registerContact = new RegistrationContact();
        
        this.loginForm = _fb.group({
            email: new Control(this.registerContact.email,
                    Validators.compose([Validators.required, Validators.minLength(4)])),
            password:new Control(this.registerContact.password,
                    Validators.compose([Validators.required, Validators.minLength(8)])),
             reset_password:new Control(this.registerContact.reset_password,
                    Validators.compose([Validators.required, Validators.minLength(8)]))
        });
        
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
            'reset-password': {
                'required': 'Password is required',
                'notequal': 'Password must be equal to password',
            }
        };
        
         this.loginForm.valueChanges
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
                let hasError = this.loginForm.controls[field].dirty &&
                    !this.loginForm.controls[field].valid;
                this.formError[field] = '';
                if (hasError) {
                    for (let key in this.loginForm.controls[field].errors) {
                        if (this.loginForm.controls[field].errors.hasOwnProperty(key)) {
                            this.formError[field] += this._validationMessages[field][key] + ' ';
                        }
                    }
                }
            }
        }
    }
    
    
    
    ngOnInit(): any{
        // this.newContact = new ContactComponent();
    }
    
    login(){
        console.log(this.loginForm.value);
        this._contactService.loginUser(this.loginForm.value)
        .subscribe(data =>{
            console.log('loginForm have been send');
        });
    }   
}