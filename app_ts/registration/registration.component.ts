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
        
        // formError: { [id: string]: string };
        formError: { [id: string]: { [id: string]: string }};
        myFormError: { [id: string]: { [id: string]: string }};
        private _validationMessages: { [id: string]: { [id: string]: string } };
        errorMessage: string;
        
        registerContact: RegistrationContact;
        /**
         * TOДО: сделать formError как formGroup.formGroup
         */
        constructor(private _fb: FormBuilder,
                    private _contactService:ContactServiceComponent){
            this.formError = {
                 'emails':{
                         'email':''
                    },
                    'passwords':{
                                'password':'',
                                'repeat_password':''
                    }
                
            // 'email': '',
            // 'passwords': '',
            // 'repeat_password':''
        };
        this.myFormError = {
            'emails':{
                'email':''
            },
            'passwords':{
                'password':'',
                'repeat_password':''
            }
        }

        console.log('from constructor');
        this.pageTitle = 'hello Vova';
        // this.print();
         console.log(this.pageTitle);
        this.registerContact = new RegistrationContact();
        
       this.passwordControl = new Control(this.registerContact.password,
                    Validators.compose([Validators.required, Validators.minLength(8)]));
        
        this.registerForm = _fb.group({
            // email: new Control(this.registerContact.email,
            //         Validators.compose([Validators.required, Validators.minLength(4)])),
            emails:_fb.group({
                email: new Control(this.registerContact.email,
                    Validators.compose([Validators.required, Validators.minLength(4)])),
            }),

            passwords:_fb.group({
                                password: new Control(this.registerContact.password,
                    Validators.compose([Validators.required, Validators.minLength(8)])),
                                repeat_password: new Control(this.registerContact.repeat_password,
                    Validators.required)},{
                                validator:checkRepeatPassword})
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
        for (let fields in this.formError) {
            // console.log('fields: '+fields);
            for(let field in this.formError[fields]){
                //  console.log('      field: '+field);
            if (this.formError.hasOwnProperty(fields)) {
                let hasError = this.registerForm.controls[fields].controls[field].dirty &&
                    !this.registerForm.controls[fields].controls[field].valid;
                    console.log('hasError?:'+hasError)
                this.formError[fields][field] = '';
                if (hasError) {
                 
                    for (let key in this.registerForm.controls[fields].controls[field].errors) {
                           if(field=='repeat_password'){
                        // console.log('repat_error:'+key)
                    }
                   
                        if (this.registerForm.controls[fields].controls[field].errors.hasOwnProperty(key)) {
                            console.log('>>>outer repeat_password error!'+this.registerForm.controls[fields].controls[field].value);    
                            if(this.registerForm.controls[fields].controls[field]=='repeat_password'){
                                console.log('>>>inner repeat_password error!');    
                            }
                            
                            this.formError[fields][field] += this._validationMessages[field][key] + ' ';
                        }
                    }
                }
            }
        }
    }

        for(let fields in this.formError['passwords']){
           console.log('field: '+fields+', error:'+this.formError['passwords'][fields]);
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
}

function checkRepeatPassword(control:ControlGroup):{[s:string]:boolean}{
    for (name in control.controls) {
    var val = control.controls[name].value
  }
        
        if(control.value.password!=control.value.repeat_password){
            // this.formError['repeat_password']=+'invalid confirm password';
            console.log('<<<repeat_password: notequal>>>')
            return {'notequal':true};  
        }else{
            return null;
        }
    }  