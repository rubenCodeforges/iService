import 'core-js';
import 'reflect-metadata';
import 'zone.js/dist/zone.js';
import 'jquery';
import 'lodash';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import '../lib/dashboard-theme.min.js';
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {AppModule} from "./app/app.module";

platformBrowserDynamic().bootstrapModule(AppModule);