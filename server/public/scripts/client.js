const app = angular.module('myApp', [] );

const appController = app.controller('AppController', ['$http', function ($http) {
    let self = this;
    console.log('what up');
    
    self.quote = {};
  

    self.getQuote = function () {
        $http({
            method: 'GET',
            url: 'http://ron-swanson-quotes.herokuapp.com/v2/quotes'
        }).then(function (response) {
            console.log(response);
            self.quote = {list: response.data};
        }).catch(function (error) {
            console.log(error);
        })
    }
    self.getQuote();
    console.log(self.quote);
    
}])