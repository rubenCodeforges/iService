import 'core-js';
import 'reflect-metadata';
import 'zone.js/dist/zone.js';
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {AppModule} from "./app/AppModule";

platformBrowserDynamic().bootstrapModule(AppModule);