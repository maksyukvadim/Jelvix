export default class CommentsService {
        constructor($http, API_TEST) {
        this.$http = $http;
        this.API_TEST = API_TEST;
    }

    getComments(postId) {
        return this.$http({
            method: 'GET',
            url: this.API_TEST + '/comments?postId=' + postId
        });
    }

}
