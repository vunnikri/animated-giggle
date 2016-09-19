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
                  
                  alert("console-17");
                  
                  // $http.get("assets/data/console-data.txt")
                  // .success(function(data) {
                  //   //$scope.consolegrid.data = data;
                  //   alert("http complete" + data);
                  // });
                  
                  $scope.consolegrid.data = [
  {
    "name": "Ethel Price",
    "country": "Scotland",
    "gender": "female",
    "dependant": "spouse",
    "offer": "EMPLOYER",
    "offerStatus": "OK",
    "englishScore": "92",
    "englishScoreStatus": "HIGH",
    "daysRemaining": "183",
    "applicantStatus": "APPROVED"
  }

];
                  
                  $scope.consolegrid = { enableRowSelection: true, enableRowHeaderSelection: false };
                  
                  $scope.consolegrid.columnDefs = [
                    { name: 'Applicant Name', field: 'name', width: "18%" },
                    { name: 'Gender', field: 'gender', width: "10%" },
                    { name: 'Dependants', field: 'dependant', width: "10%" },
                    
                    { name: 'Entry Offer', field: 'offer', width: "13%", enableFiltering: false,
                      cellClass: function(grid, row, col, rowRenderIndex, colRenderIndex)
                      {
                        if(row.entity.offerStatus === 'OK') { return 'status-ok'; }
                        else if(row.entity.offerStatus === 'Inactive')  { return 'status-inactive'; }
                        else if(row.entity.offerStatus === 'Rejected')  { return 'status-error'; }
                      }
                    },
                    { name: 'Resident Country', field: 'country', width: "13%" },
                    { name: 'English Score', field: 'englishScore', width: "13%", enableFiltering: false,
                      cellClass: function(grid, row, col, rowRenderIndex, colRenderIndex)
                      {
                        if(row.entity.englishScoreStatus === 'HIGH') { return 'status-ok'; }
                        else if(row.entity.englishScoreStatus === 'MEDIUM')  { return 'status-inactive'; }
                        else if(row.entity.englishScoreStatus === 'LOW')  { return 'status-error'; }
                      }
                    },
                    { name: 'Days Remaining', field: 'daysRemaining', width: "12%", cellClass: "console-text-center" },
                    { name: 'Status', field: 'applicantStatus', width: "11%", enableFiltering: false,
                      cellClass: function(grid, row, col, rowRenderIndex, colRenderIndex)
                      {
                        if(row.entity.applicantStatus === 'APPROVED') { return 'status-ok'; }
                        else if(row.entity.applicantStatus === 'ON-HOLD')  { return 'status-hold'; }
                        else if(row.entity.applicantStatus === 'REJECTED')  { return 'status-error'; }
                      }
                    }
                  ];
                  
                  $scope.consolegrid.multiSelect = false;
                  $scope.consolegrid.modifierKeysToMultiSelect = false;
                  $scope.consolegrid.noUnselect = false;
                  
                  $scope.consolegrid.onRegisterApi = function ( gridApi) {
                    $scope.gridApi = gridApi;
                    gridApi.selection.on.rowSelectionChanged($scope, function(row){
                      if(row.isSelected)
                      {
                        if(row.entity && row.entity.name)
                        {
                          //Save the selected application into singleton
                          //singleton.setConsoleRow(row);
                          $rootScope.enableConfiguration = "enabled";
                        }
                      }
                    });
                  };
                  
                  $scope.toggleRowSelection = function() {
                    $scope.gridApi.selection.clearSelectedRows();
                    $scope.consolegrid.enableRowSelection = !$scope.consolegrid.enableRowSelection;
                    $scope.gridApi.core.notifyDataChange( uiGridConstants.dataChange.OPTIONS);
                  };
                  
                  
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
