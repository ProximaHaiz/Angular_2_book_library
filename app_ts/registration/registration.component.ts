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
        registerForm: ControlGroup;
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
            'repeat_password':''
        };
        this.registerContact = new RegistrationContact();
        
        this.registerForm = _fb.group({
            email: new Control(this.registerContact.email,
                    Validators.compose([Validators.required, Validators.minLength(4)])),
            password: new Control(this.registerContact.password,
                    Validators.compose([Validators.required, Validators.minLength(8)])),
             repeat_password: new Control(this.registerContact.repeat_password,
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
                this.formError[field] = '';
                if (hasError) {
                    for (let key in this.registerForm.controls[field].errors) {
                        if (this.registerForm.controls[field].errors.hasOwnProperty(key)) {
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
        console.log(this.registerForm.value);
        this._contactService.loginUser(this.registerForm.value)
        .subscribe(data =>{
            console.log('loginForm have been send');
        });
    }   
}