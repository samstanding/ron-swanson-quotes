const app = angular.module('myApp', ['ngRoute'] );

const appController = app.controller('AppController', ['RonService', function (RonService) {
    let self = this;

    self.getQuote = RonService.getQuote;
    self.quote = RonService.quote;

    self.getQuote();

}]);

app.service('RonService', ['$http', function ($http) {
    let self = this;
    self.quote = {list: []};

    self.getQuote = function () {
        $http({
            method: 'GET',
            url: 'http://ron-swanson-quotes.herokuapp.com/v2/quotes'
        }).then(function (response) {
            console.log(response);
            self.quote.list = response.data;
        }).catch(function (error) {
            console.log(error);
        })
    }
}]);