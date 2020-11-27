/************************************************************
 * Purpose: Calculates annual pay data
 *************************************************************/
import incomeTaxAnnual from "../../constants/incomeTaxAnnual.js";

export default class annualPayCalculator {
  /**
   * Calculates annual income tax
   * @param  annualSalary
   */
  calcAnnualIncomeTax(annualSalary) {
    let incomeTax;
    let taxableIncome;
    let annualTaxRate;

    if (
      annualSalary >= incomeTaxAnnual.TIER_2.from &&
      annualSalary <= incomeTaxAnnual.TIER_2.to
    ) {
      taxableIncome = incomeTaxAnnual.TIER_2.from - 1;
      annualTaxRate = incomeTaxAnnual.TIER_2.rate;
    } else if (
      annualSalary >= incomeTaxAnnual.TIER_3.from &&
      annualSalary <= incomeTaxAnnual.TIER_3.to
    ) {
      taxableIncome = incomeTaxAnnual.TIER_3.from - 1;
      annualTaxRate = incomeTaxAnnual.TIER_3.rate;
    } else if (
      annualSalary >= incomeTaxAnnual.TIER_4.from &&
      annualSalary <= incomeTaxAnnual.TIER_4.to
    ) {
      taxableIncome = incomeTaxAnnual.TIER_4.from - 1;
      annualTaxRate = incomeTaxAnnual.TIER_4.rate;
    } else if (annualSalary >= incomeTaxAnnual.TIER_5.from) {
      taxableIncome = incomeTaxAnnual.TIER_5.from - 1;
      annualTaxRate = incomeTaxAnnual.TIER_5.rate;
    } else {
      return incomeTaxAnnual.TIER_1.rate;
    }

    incomeTax = (annualSalary - taxableIncome) * annualTaxRate;
    return incomeTax + this.calcAnnualIncomeTax(taxableIncome);
  }
}
