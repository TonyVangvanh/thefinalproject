angular.module('feeds').factory('Feeds', ['$resource', function($resource) {
    return $resource('api/feeds/:feedId', {
         feedId: '@_id'
    }, {
        update: {
            method: 'PUT'
         
        }
    });
}]);