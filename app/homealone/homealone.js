angular.module('uiRouterSample.homealone', [
  'ui.router'
])
  
.config(
  [          '$stateProvider', '$urlRouterProvider',
    function ($stateProvider,   $urlRouterProvider) {
    
      $stateProvider
      
        /////////////////
        // Home Screen //
        /////////////////

        .state('homealone', {
          url: '/homealone',
          views: {

            '': {
              templateUrl: 'app/homealone/homealone.html',
              controller: ['$scope', '$state',
                function (  $scope,   $state) {
                  alert("in homealone controller");
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
