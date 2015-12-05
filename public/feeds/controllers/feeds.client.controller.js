
'use strict';


angular.module('feeds').controller('FeedsController', ['$scope', '$routeParams', '$location', 'Authentication', 'Feeds',
    function($scope, $routeParams, $location, Authentication, Feeds) {
        $scope.authentication = Authentication;

        $scope.create = function() {
  
            var feed = new Feeds({
                title: this.title,
                content: this.content
            });

            feed.$save(function(response) {
                $location.path('feeds/' + response._id);
            }, function(errorResponse) {
                $scope.error = errorResponse.data.message;
            });
        };

        $scope.find = function() {
            $scope.feeds = Feeds.query();
        };

        $scope.findOne = function() {
            $scope.feed = Feeds.get({
                feedId: $routeParams.feedId
            });
        };

        $scope.update = function() {
            $scope.feed.$update(function() {
                $location.path('feeds/' + $scope.feed._id);
            }, function(errorResponse) {
                $scope.error = errorResponse.data.message;
            });
        };

        $scope.delete = function(feed) {
            if (feed) {
                feed.$remove(function() {
                    for (var i in $scope.feeds) {
                        if ($scope.feeds[i] === feed) {
                            $scope.feeds.splice(i, 1);
                        }
                    }
                });
            }
            else {
                $scope.feed.$remove(function() {
                    $location.path('feeds');
                });
            }
        };
    }
]);