import UsersController from './users.controller';
import UsersService from './users.service'

angular.module('app.users', [])
.controller('usersController', UsersController)
.service('UsersService', UsersService)
;