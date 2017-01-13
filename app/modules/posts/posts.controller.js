export default class PostsController {
    constructor(PostsService, $scope, $state, $stateParams) {
        this.$scope = $scope;
        this.$state = $state;
        this.$stateParams = $stateParams;
        this.PostsService = PostsService;
        this.init();
    }

    init() {
        this.getPosts();
    }

    getPosts() {
        this.PostsService.getPosts(this.$stateParams.userId).then((response) => {
            this.$scope.posts = response.data;
        })
    }
      pickPost(id) {
         this.$state.go('comments', {postId: id});
     }

}