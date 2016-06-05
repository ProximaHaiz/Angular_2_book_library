import {Component,OnInit} from '@angular/core';
import {LoginFormComponent} from './login/login.component';
import { Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';
import{ContentComponent} from './content/content.component';
import{ContactServiceComponent} from './service/contact.service';
import {RegistrationFormComponent} from './registration/registration.component'

@Component({
    selector: 'my-app',
    template: `
    <nav class="navbar navbar-default navbar-fixed-top spaces" role="navigation">
    <div class="container-fluid">
        <div class="navbar-header">
            
            <a class="navbar-brand" href="/data/get"><span class="glyphicon glyphicon-home" ></span> Home</a>
             <a class="navbar-brand" [routerLink]="['/welcome']">Content</a>

        </div>
        <div class="navbar-collapse collapse">
            
            <ul class="nav navbar-nav navbar-right">
                <li><a th:href="@{/user/reset-password}" href="reset"> <span class="glyphicon glyphicon-refresh"></span>Reset Password</a></li>
                <li><a [routerLink]="['/register']" > <span class="glyphicon glyphicon-user"></span>Sign up</a></li>
                <li><a [routerLink]="['/login']" ><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
                <li><a th:href="@{/logout}" href="/logout"><span class="glyphicon glyphicon-log-out"></span> Logout</a></li>
            </ul>
        </div>
    </div>
</nav>


      
       
        <div class="container-fluid spaces">
            <router-outlet></router-outlet>
        </div>
        
    

<footer class="footer navbar-fixed-bottom">
     <div class="container">
     <p class="text-muted center">Developed by Karpov Vladimir, 2016 </p>
     </div>
</footer>
    
    `,
    directives: [ROUTER_DIRECTIVES],
   providers:[ROUTER_PROVIDERS, HTTP_PROVIDERS, ContactServiceComponent],
  
     
})
@Routes([
    { path: '/', component: LoginFormComponent },
    { path: '/login', component: LoginFormComponent },
    { path: '/welcome', component: ContentComponent },
    { path: '/register', component: RegistrationFormComponent },
   
])
export class AppComponent {
   pageTitle: string = 'Vova';
   
   header: string;
   
   constructor(){
               this.header =`ООО «Гидропневмоаппарат» является разработчиком и 
    производителем насосных установок (гидравлических станций). Также, 
    ООО "Гидропневмоаппарат" поставляет гидравлическоое и пневматическое 
    оборудование других производителей: насосы, гидромоторы, 
    гидрораспределители, клапаны`
   }
}
