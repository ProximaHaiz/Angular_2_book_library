import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {
     FormBuilder,
     ControlGroup,
     Control,
     Validators,
     FORM_DIRECTIVES } from '@angular/common';
import{ContactComponent} from './contact'
import{ContactServiceComponent} from '../service/contact.service';
import{DataHandlerService} from '../service/data-handler.service';
import {TestComponent} from './login-test.component';
import {Subject} from "rxjs/Subject";

@Component({
    templateUrl:'app_ts/login/login.html',
    styleUrls:['src/css/signin.css'],
directives: [ROUTER_DIRECTIVES,FORM_DIRECTIVES,TestComponent]
    }
)
 export class LoginFormComponent implements OnInit{
        loginForm: ControlGroup;
        public pageTitle: string;
        term = new Control();
        search:string;
        errorMessage: string;
        private searchStream = new Subject<string>();

           ngOnInit(): any{
                this.searchStream
                    .debounceTime(300)
                    .distinctUntilChanged()
                    .switchMap(term => this._dataHandlerService.changeNav(term))
                    .subscribe(
                        content => '',
                        error => this.errorMessage = <any>error
                    )
            }
        updateValue(){
              this.searchStream.next(this.term.value); 
        }

        formError: { [id: string]: string };
        private _validationMessages: { [id: string]: { [id: string]: string } };
        
        
        newContact: ContactComponent;
        
        constructor(private _fb: FormBuilder,
                    private _contactService:ContactServiceComponent,
                    private _dataHandlerService: DataHandlerService){
            this.formError = {
            'username': '',
            'password': ''
        };
        this.newContact = new ContactComponent();
        
        this.loginForm = _fb.group({
            username: new Control(this.newContact.username,
            Validators.compose([Validators.required, Validators.minLength(4)])),
            password:new Control(this.newContact.password,
             Validators.compose([Validators.required, Validators.minLength(6)]))
        });
        
        this._validationMessages = {
            'username': {
                'required': 'Username is required',
                'minlength': 'Username must be at least four characters.',
                'maxlength': 'Username cannot exceed 50 characters.'
            },
            'password': {
                'required': 'Password is required',
                'minlength': 'Password must be at least 6 characters.',
                'maxlength': 'Password cannot exceed 50 characters.'
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
    
    login(){
        console.log(this.loginForm.value);
        this._contactService.loginUser(this.loginForm.value)
        .subscribe(data =>{
            console.log('loginForm have been send');
        });
    }   
}
