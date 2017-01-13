import angular from 'angular';
import uiRouter from 'angular-ui-router';
import 'angular-material';

import './modules/users/users.module';
import './modules/comments/comments.module';
import './modules/posts/posts.module';

import {routerConfig} from './app.router';

angular.module('myApp', [uiRouter, 'app.users', 'app.posts', 'app.comments', 'ngMaterial'])
.config(routerConfig)
.constant('API_TEST', 'https://jsonplaceholder.typicode.com');
;