angular.module('uiRouterSample.login', [
  'ui.router'
])
  
.config(
  [          '$stateProvider', '$urlRouterProvider',
    function ($stateProvider,   $urlRouterProvider) {
    
      $stateProvider
      
        //////////////////
        // Login Screen //
        //////////////////

        .state('login', {
          url: '/login',
          views: {

            // This is targeting the unnamed ui-view within the parent state 
            '': {
              templateUrl: 'app/login/login.html',
              controller: ['$scope', '$state',
                function (  $scope,   $state) {
                  
                  $scope.executeLogin = function () {
                    alert('switch to home view');
                    $state.go('home');
                  };
                }]
            },

            // Here we see we are overriding the template that was set by 'contacts.detail'
            'navigation-bar@': {
              templateUrl: 'app/navbar/login-navbar.html',
              controller: ['$scope',
                function ($scope) {
                  
                  $scope.showAboutModal = function () {
                    alert('switch to modal view');
                    //$("aboutModal").modal((backdrop: false));
                    //$("aboutModal").modal((backdrop: "static"));
                  };
                }]
            }
          }
        });
    }
  ]
);
