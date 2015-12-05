angular.module('feeds').config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/feeds', {
            templateUrl: 'feeds/views/list-feeds.client.view.html'
        }).
        when('/feeds/create', {
            templateUrl: 'feeds/views/create-feed.client.view.html'
        }).
        when('/feeds/:feedId', {
            templateUrl: 'feeds/views/view-feed.client.view.html'
        }).
        when('/feeds/:feedId/edit', {
            templateUrl: 'feeds/views/edit-feed.client.view.html'
        });
    }
]);