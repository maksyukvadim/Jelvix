export default class UsersService {
        constructor($http, API_TEST) {
        this.$http = $http;
        this.API_TEST = API_TEST;
    }

    getUsers() {
        return this.$http({
            method: 'GET',
            url: this.API_TEST + '/users'
        });
    }

}
