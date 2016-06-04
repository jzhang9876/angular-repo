var app = angular.module('myApp.directives', []);

app.directive('actionTable', function() {
  return {
    restrict: 'AE',
    replace: true,
    scope: {
      applications: '=',
      editable: '='
    },
    templateUrl: '/app/partial/actionTable.html'
  };
});