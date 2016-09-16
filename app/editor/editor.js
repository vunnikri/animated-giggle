angular.module('uiRouterSample.editor', [
  'ui.router'
])
  
.config(
  [          '$stateProvider', '$urlRouterProvider',
    function ($stateProvider,   $urlRouterProvider) {
    
      $stateProvider
      
        /////////////////
        // Home Screen //
        /////////////////

        .state('editor', {
          url: '/editor',
          views: {

            '': {
              templateUrl: 'app/editor/editor.html',
              controller: ['$scope', '$state',
                function (  $scope,   $state) {
                  //alert("in editor controller");
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
