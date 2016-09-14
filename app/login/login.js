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
                function (  $scope,   $$state) {
                  
                  alert('in login controller');

                  $scope.executeLogin = function () {
                    $state.go('home');
                  };
                }]
            },

            // Here we see we are overriding the template that was set by 'contacts.detail'
            'navigation-bar@@': {
              template: ' This is contacts.detail.item overriding the "hint" ui-view'
            }
          }
        });
    }
  ]
);
