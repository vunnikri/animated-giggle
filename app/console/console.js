angular.module('uiRouterSample.console', [
  'ui.router'
])
  
.config(
  [          '$stateProvider', '$urlRouterProvider',
    function ($stateProvider,   $urlRouterProvider) {
    
      $stateProvider
      
        /////////////////
        // Home Screen //
        /////////////////

        .state('console', {
          url: '/console',
          views: {

            '': {
              templateUrl: 'app/console/console.html',
              controller: ['$scope', '$state', '$rootScope', '$http',
                function (  $scope,   $state, $rootScope, $http) {
                  
                  $rootScope.enableConfiguration = "disabled";
                  
                  alert("console-10");
                  
                  $http.get("app/console/data.json")
                  
                  //$http.get("assets/data/console-data.json")
                  .success(function(data) {
                    //$scope.consolegrid.data = data;
                    alert("http complete" + data);
                  });
                  
                  alert("console-10");
                  
                  
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
