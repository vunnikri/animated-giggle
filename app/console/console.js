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
                  
                  alert("console-15");
                  
                  $http.get("assets/data/console-data.txt")
                  .success(function(data) {
                    $scope.consolegrid.data = data;
                    alert("http complete" + data);
                  });
                  
                  $scope.consolegrid = { enableRowSelection: true, enableRowHeaderSelection: false };
                  
                  $scope.consolegrid.columnDefs = [
                    { name: 'Applicant Name', field: 'name', width: "18%" },
                    { name: 'Gender', field: 'gender', width: "10%" },
                    { name: 'Dependants', field: 'dependant', width: "10%" },
                    
                    
                    ]
                  
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
