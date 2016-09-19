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
                  
                  alert("console-min-1");

                  $scope.consolegrid = { enableRowSelection: true, enableRowHeaderSelection: false };
                  $scope.consolegrid.columnDefs = [
                    { name: 'Applicant Name', field: 'name', width: "18%" },
                    { name: 'Gender', field: 'gender', width: "10%" }
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
