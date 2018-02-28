const appController = app.controller('AppController', ['RonService', function (RonService) {
    let self = this;

    self.getQuote = RonService.getQuote;
    self.quote = RonService.quote;

    self.getQuote();

}]);