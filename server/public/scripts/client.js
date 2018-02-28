const app = angular.module('myApp', ['ngRoute'] );

app.config(function ($routeProvider) {
    $routeProvider.when('/one', {
        templateUrl: '/views/one.html',
        controller: 'AppController as ac'
    }).when('/three', {
        templateUrl: '/views/three.html',
        controller: 'TreeController as tc'
    }).otherwise ({template: '<h1>404 Page Not Found</h1>'});
});



