


const Page = require('./pages');


class ResultsPage extends Page {
    
    get resultsChart () {
        return $('#results-chart');
    }

    get calculatedResults () {
        //$('#retirement-amount-results').waitForDisplayed();
        return $('#retirement-amount-results').getText();
    }

 




}

module.exports = new ResultsPage();
