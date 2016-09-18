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
              controller: ['$scope', '$state', '$rootScope',
                function (  $scope,   $state, $rootScope) {
                  
                  $rootScope.enableConfiguration = "disabled";
                  
                  $scope.user = "John";
                  var homeData = {fullname: "John Doe", applicantsAssigned: "1055", processingCount: "64", 
                                  jobOffers: "26", provincialOffers: "32", successfulCandidates: "284",
                                  lastLogin: "2016-05-20 06:34:19" };
                  $scope.homeData = homeData;
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
