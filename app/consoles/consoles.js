angular.module('uiRouterSample.consoles', [
  'ui.router'
])
  
.config(
  [          '$stateProvider', '$urlRouterProvider',
    function ($stateProvider,   $urlRouterProvider) {
    
      $stateProvider
      
        /////////////////
        // Home Screen //
        /////////////////

        .state('consoles', {
          url: '/consoles',
          views: {

            '': {
              templateUrl: 'app/consoles/consoles.html',
              controller: ['$scope', '$state',
                function (  $scope,   $state) {
                  alert("in consoles controller");
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
