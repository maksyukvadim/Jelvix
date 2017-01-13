export default class PostsService {
        constructor($http, API_TEST) {
        this.$http = $http;
        this.API_TEST = API_TEST;
    }

    getPosts(userId) {
        return this.$http({
            method: 'GET',
            url: this.API_TEST + '/posts?userId=' + userId
        });
    }

}
