export default class CommentsController {
     constructor(CommentsService, $scope, $stateParams) {
        this.$scope = $scope;
        this.$stateParams = $stateParams;
        this.CommentsService = CommentsService;
        this.init();
    }

     init() {
        this.getComments();
    }

    getComments() {
        this.CommentsService.getComments(this.$stateParams.postId).then((response) => {
            this.$scope.comments = response.data;
        })
    }
}