

const Page = require('./pages');

class CalculatorPage extends Page {
   
    get default_v () {
        return $("//a[@data-target='#default-values-modal']");
    }



    get additional_income () {
        return $('#additional-income');
    }

    get ret_duration () {
        return $('#retirement-duration');
    }

    get ret_annual_income () {
        return $('#retirement-annual-income');
    }

    get post_ret_roi() {
        return $('#post-retirement-roi');
    }



    get save_btn() {
        return $("(//button[@class='dsg-btn-primary btn-block'])[2] ");
    }





    

    



    
    async req_fields (additional_income1,ret_duration1,ret_annual_income1,post_ret_roi1) {
        
        await this.default_v.click();
        await browser.pause(2000);
        await this.additional_income.click();
        await this.additional_income.setValue(additional_income1);
        await this.ret_duration.click();
        await this.ret_duration.setValue(ret_duration1);
        await this.ret_annual_income.click();
        await this.ret_annual_income.setValue(ret_annual_income1);
        await this.post_ret_roi.click();
        await this.post_ret_roi.setValue(post_ret_roi1);
        await this.save_btn.click();

        

        
        


    }

    
    open () {
        return super.open('insights-tools/retirement-calculator.html');
    }
}

module.exports = new CalculatorPage();
