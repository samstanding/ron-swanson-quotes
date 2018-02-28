const treeController = app.controller('TreeController', ['RonService', function (RonService) {
    let self = this;

    self.getQuotes = RonService.getQuotes;
    self.quote = RonService.quotes;

    self.getQuotes();

}]);
