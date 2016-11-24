import 'core-js';
import 'reflect-metadata';
import 'zone.js/dist/zone.js';
import 'jquery';
import 'lodash';
import 'bootstrap-loader';
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {AppModule} from "./app/AppModule";

platformBrowserDynamic().bootstrapModule(AppModule);