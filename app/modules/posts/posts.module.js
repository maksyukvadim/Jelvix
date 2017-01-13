import PostsController from './posts.controller';
import PostsService from './posts.service';

angular.module('app.posts', [])
.controller('postsController', PostsController)
.service('PostsService', PostsService)
;