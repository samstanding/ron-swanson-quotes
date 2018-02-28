app.service('RonService', ['$http', function ($http) {
    let self = this;
    self.quote = {list: []};
    self.quotes = {list: []};

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
    self.getQuotes = function () {
        $http({
            method: 'GET',
            url: 'http://ron-swanson-quotes.herokuapp.com/v2/quotes/3'
        }).then(function (response) {
            console.log(response);
            self.quotes.list = response.data;
        }).catch(function (error) {
            console.log(error);
        })
    }
}]);