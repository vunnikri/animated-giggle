angular.module('uiRouterSample.consoles', [
  'ui.router'
])
  
.config(
  [          '$stateProvider', '$urlRouterProvider',
    function ($stateProvider,   $urlRouterProvider) {
    
      $stateProvider
      
        /////////////
        // Console //
        /////////////

        .state('consoles', {
          
          abstract: false;
          
          // this absstract state will append '/consoles' onto the url of all its children
          url: '/consoles',
          views: {

            '': {
              templateUrl: 'app/consoles/consoles.html',
              controller: ['$rootScope', '$scope', '$state', '$http', 'singleton',
                function (  $rootScope, $scope, $state, $http, singleton) {
                  alert("in console controller");
                }]
            },

            'navigation-bar@': {
              templateUrl: 'app/navbar/console-navbar.html'
            }
          }
        })
        ;
    }
  ]
);
