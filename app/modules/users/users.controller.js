export default class UsersController {
    constructor(UsersService, $scope, $state) {
        this.$scope = $scope;
        this.$state = $state;
        this.UsersService = UsersService;
        this.init();
    }


    init() {
        this.getUsers();
    }
    getUsers() {
        this.UsersService.getUsers().then((response) => {
            this.$scope.users = response.data;
        })  
    }

      pickUser(id) {
        this.$state.go('posts',{userId: id});
    }
}