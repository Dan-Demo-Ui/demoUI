

const Page = require('./pages');

class CalculatorPage extends Page {
   
    get current_age () {
        return $('#current-age');
    }

    get age_to_retire () {
        return $('#retirement-age');
    }

    get current_anual_income () {
        return $("//input[@id='current-income']");
    }

    get spouse_income () {
        return $('#spouse-income');
    }

    

    get current_ret_savings_balance () {
        return $('#current-total-savings');
    }

    get currently_saving_each_year () {
        return $('#current-annual-savings');
    }

    get rate_of_increase_each_year () {
        return $('#savings-increase-rate');
    }

    get social_security_toggle_off () {
        return $("//input[@id='no-social-benefits']/..");
    }

    get calculate_button () {
        return $("//button[@data-tag-id='submit']");
    }

    

    
    async req_fields (age, retirement_age, current_annual_income,spouse_income, current_retirement_savings, current_ret_contribution, annual_contr_increase) {
        await this.current_age.setValue(age);
        await this.age_to_retire.setValue(retirement_age);
        await this.current_anual_income.click(); 
        await this.current_anual_income.setValue(current_annual_income);

        await this.spouse_income.click(); 
        await this.spouse_income.setValue(spouse_income);

        await this.current_ret_savings_balance.click();
        await this.current_ret_savings_balance.setValue(current_retirement_savings);
        await this.currently_saving_each_year.setValue(current_ret_contribution);
        await this.rate_of_increase_each_year.setValue(annual_contr_increase);
        await this.social_security_toggle_off.click();
        await this.calculate_button.click();


    }

    
    open () {
        return super.open('insights-tools/retirement-calculator.html');
    }
}

module.exports = new CalculatorPage();
