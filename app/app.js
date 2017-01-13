import angular from 'angular';
import uiRouter from 'angular-ui-router';
import 'angular-material';
import sanitize  from 'angular-sanitize';

import './modules/users/users.module';
import './modules/comments/comments.module';
import './modules/posts/posts.module'

import filterDir from './modules/directive/filtr.directive';

import filter from './modules/filters/custom.filter';
import {routerConfig} from './app.router';

angular.module('myApp', [uiRouter, sanitize, 'app.users', 'app.posts', 'app.comments', 'ngMaterial'])
.config(routerConfig)
.constant('API_TEST', 'https://jsonplaceholder.typicode.com')
.filter('filter', filter)
.directive('filterDir', filterDir)
;