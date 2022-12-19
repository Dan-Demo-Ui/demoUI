const CalculatorPageWitoutSSC = require('../pageobjects/calculator_without_ssc.page');
const CalculatorPageWithSSC = require('../pageobjects/calculator_with_ssc.page');
const CalculatorAll_feild_Page = require('../pageobjects/calculator_all_fields.page');
const DefaultPage = require('../pageobjects/default_values_page');
const ResultsPage = require('../pageobjects/results.page');

describe('My Retirement application', () => {
    it('should be able to submit form with all required fields filled in WITHOUT Social Security Card', async () => {


        await CalculatorPageWitoutSSC.open();
        await CalculatorPageWitoutSSC.req_fields(40, 68, 100000, 500000,10,5,);
        await browser.pause(5000);
        await expect(ResultsPage.resultsChart).toBeExisting();
        expect(await ResultsPage.calculatedResults).toEqual('$2,498,680.02');

    });

    it('should be able to submit form with all required fields filled in WITH Social Security Card', async () => {


        await CalculatorPageWithSSC.open();
        await CalculatorPageWithSSC.req_fields(40, 68, 110000, 500000,10,5,500);
        await browser.pause(5000);
        await expect(ResultsPage.resultsChart).toBeExisting();
        expect(await ResultsPage.calculatedResults).toEqual('$2,748,548.02');

    });

    it('should be able to submit form with ALL fields filled in', async () => {


        await CalculatorAll_feild_Page.open();
        await CalculatorAll_feild_Page.req_fields(40,68,110000,75000,500000,10,5);
        await browser.pause(5000);
        await expect(ResultsPage.resultsChart).toBeExisting();
        expect(await ResultsPage.calculatedResults).toEqual('$4,622,558.03');

    });


    it('should be able to update default values', async () => {

        await DefaultPage.open();
        await DefaultPage.req_fields(1000,10,5,10);
        await CalculatorAll_feild_Page.req_fields(40,68,110000,75000,500000,10,5);
        await browser.pause(5000);
        await expect(ResultsPage.resultsChart).toBeExisting();
        expect(await ResultsPage.calculatedResults).toEqual('$139,538.38');

    });





});


