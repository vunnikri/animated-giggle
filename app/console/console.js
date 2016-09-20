angular.module('uiRouterSample.console', [
  'ui.grid',
	'ui.grid.selection'
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
                  
                  alert("console-min-module-2");

                  $scope.consolegrid = {};
                  $scope.consolegrid.columnDefs = [
                    { name: 'Applicant Name' },
                    { name: 'Gender' }
                  ];
                  
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
