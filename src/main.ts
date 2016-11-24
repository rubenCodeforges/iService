import 'core-js';
import 'reflect-metadata';
import 'zone.js/dist/zone.js';
import 'jquery';
import 'lodash';
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {AppModule} from "./app/app.module";

platformBrowserDynamic().bootstrapModule(AppModule);