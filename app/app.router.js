export function routerConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    .state('users', {
      url: '/',
      views: {
        'container@' : {
            templateUrl: 'views/users/users.view.html',
            controller: 'usersController',
            controllerAs: 'vm',
          },
      }
    })
    .state('users.posts', {
      url: ':id/posts',
      views: {
        'container@' : {
            templateUrl: 'views/posts/posts.view.html',
            controller: 'postsController',
            controllerAs: 'vm',
          },
      }
    })
    .state('comments', {
      url: 'comments',
      views: {
        'container@' : {
            templateUrl: 'views/comments/comments.view.html',
            controller: 'commentsController',
            controllerAs: 'vm',
          },
      }
    });
          
  $urlRouterProvider.otherwise('/');
  $locationProvider.html5Mode(true);
  }