angular.module('uiRouterSample.home', [
  'ui.router'
])
  
.config(
  [          '$stateProvider', '$urlRouterProvider',
    function ($stateProvider,   $urlRouterProvider) {
    
      $stateProvider
      
        /////////////////
        // Home Screen //
        /////////////////

        .state('home', {
          url: '/home',
          views: {

            '': {
              templateUrl: 'app/home/home.html',
              controller: ['$scope', '$state',
                function (  $scope,   $state) {
                
                  alert("in home controller");
                  
                  $scope.executeHomeFunctionality = function () {
                    // Execute Home Functionality
                  };
                }]
            },

            'navigation-bar@': {
              templateUrl: 'app/navbar/console-navbar.html'
            }
          }
        })
        .state('logout2', {
        url: 'logout2',
        });
    }
  ]
);
