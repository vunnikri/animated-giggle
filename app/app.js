// Make sure to include the `ui.router` module as a dependency
angular.module('uiRouterSample', [
  'uiRouterSample.login',
  'uiRouterSample.home',
  'uiRouterSample.console',
  'uiRouterSample.editor',
  'ui.router', 
  'ngAnimate'
])

.run(
  [          '$rootScope', '$state', '$stateParams',
    function ($rootScope,   $state,   $stateParams) {

    // It's very handy to add references to $state and $stateParams to the $rootScope
    // so that you can access them from any scope within your applications.
    
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    $rootScope.enableConfiguration = "disabled";
    $rootScope.usertype = "normal";
    }
  ]
)

.config(
  [          '$stateProvider', '$urlRouterProvider',
    function ($stateProvider,   $urlRouterProvider) {

      /////////////////////////////
      // Redirects and Otherwise //
      /////////////////////////////

      // Use $urlRouterProvider to configure any redirects (when) and invalid urls (otherwise).
      $urlRouterProvider

  
        // If the url is ever invalid, e.g. '/asdf', then redirect to '/' aka the home state
        .otherwise('/login');


      //////////////////////////
      // State Configurations //
      //////////////////////////

      // Use $stateProvider to configure your states.
      $stateProvider

        ///////////////////////
        // Alternate Outcome //
        //////////////////////

        .state('alternate', {
          url: '/alternate',
          templateUrl: 'app/alternate.html'
        })
    }
  ]
);
