import CommentsController from './comments.controller';

import CommentsService from './comments.service';

angular.module('app.comments', [])
.controller('commentsController', CommentsController)
.service('CommentsService', CommentsService)
;