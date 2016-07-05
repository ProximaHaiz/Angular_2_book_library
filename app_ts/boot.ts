import {bootstrap} from '@angular/platform-browser-dynamic';
import {AppComponent} from "./app.component";
import {HTTP_PROVIDERS} from "@angular/http";
import { APP_ROUTER_PROVIDERS } from './app.routes';
import{ContactServiceComponent} from './service/contact.service';
import{DataHandlerService} from './service/data-handler.service';
import 'rxjs/Rx';

/**
 * All classes will use the same instances of following providers elements
 */
bootstrap(AppComponent, [
                         HTTP_PROVIDERS,
                         APP_ROUTER_PROVIDERS,
                         ContactServiceComponent,
                         DataHandlerService
                         ])
    .catch(err => console.error(err));
