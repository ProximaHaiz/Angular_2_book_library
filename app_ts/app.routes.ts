<<<<<<< HEAD
import { provideRouter, RouterConfig } from '@angular/router';
import {LoginFormComponent} from './login/login.component';
import{ContentComponent} from './content/content.component';
import{ContactServiceComponent} from './service/contact.service';
import {RegistrationFormComponent} from './registration/registration.component';
import{DropDownComponent} from './content/drop_down.component';
import {SingleContentComponent} from './content/singleContentElement.component';
import {MainContentComponent} from './content/main-content';



export const routes: RouterConfig = [
    { path: '', component: LoginFormComponent },
    { path: 'login', component: LoginFormComponent },
    { path: 'register', component: RegistrationFormComponent },
    { path: 'drop', component: DropDownComponent },
    { path: 'content', component: ContentComponent,
    children:[
            { path: '', component: MainContentComponent },
            { path: 'contentElement/:id', component: SingleContentComponent },
            { path: 'category/:category', component: MainContentComponent},
             ] }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
=======
import { provideRouter, RouterConfig } from '@angular/router';
import {LoginFormComponent} from './login/login.component';
import{ContentComponent} from './content/content.component';
import{ContactServiceComponent} from './service/contact.service';
import {RegistrationFormComponent} from './registration/registration.component';
import{DropDownComponent} from './content/drop_down.component';
import {SingleContentComponent} from './content/singleContentElement.component';
import {MainContentComponent} from './content/main-content';



export const routes: RouterConfig = [
    { path: '', component: LoginFormComponent },
    { path: 'login', component: LoginFormComponent },
    { path: 'register', component: RegistrationFormComponent },
    { path: 'drop', component: DropDownComponent },
    { path: 'content', component: ContentComponent,
    children:[
            { path: '', component: MainContentComponent },
            { path: 'contentElement/:id', component: SingleContentComponent },
            { path: 'category/:category', component: MainContentComponent},
             ] }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
>>>>>>> 3e9a155e50098a842d7970c1c765342429c52d5b
];