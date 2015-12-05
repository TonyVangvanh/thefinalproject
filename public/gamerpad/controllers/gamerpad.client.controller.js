// Invoke 'strict' JavaScript mode
'use strict';


angular.module('gamerpad').controller('GamerpadController', ['$scope', 'Authentication',
  function($scope, Authentication) {
    $scope.authentication = Authentication;
  }
]);