import {bootstrap} from '@angular/platform-browser-dynamic';
import {AppComponent} from "./app.component";
import {HTTP_PROVIDERS} from "@angular/http";
import 'rxjs/Rx';
// import {MODAL_BROWSER_PROVIDERS} from 'angular2-modal/platform-browser';

/**
 * All classes will use the same instances of following providers elements
 */
bootstrap(AppComponent, [HTTP_PROVIDERS]);
