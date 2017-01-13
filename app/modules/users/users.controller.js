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
        console.log(response);

        })

        
    }

      pickUser(idUser) {
        this.$state.go('users.posts',{id: idUser});

    }
}