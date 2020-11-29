/************************************************************
 * Purpose: Calculates annual pay data
 *************************************************************/
import incomeTaxAnnual from "../../constants/incomeTaxAnnual.js";

export default class annualPayCalculator {
  /**
   * Calculates annual income tax, using recursion
   * @param  annualSalary
   */
  calcAnnualIncomeTax(annualSalary) {
    let incomeTax;
    let taxableAmountRem;
    let annualTaxRate;

    // If salary is between $20,001 - $40,000
    if (
      annualSalary >= incomeTaxAnnual.TIER_2.from &&
      annualSalary <= incomeTaxAnnual.TIER_2.to
    ) {
      taxableAmountRem = incomeTaxAnnual.TIER_2.from - 1;
      annualTaxRate = incomeTaxAnnual.TIER_2.rate;
      // If salary is between $40,001 - $80,000
    } else if (
      annualSalary >= incomeTaxAnnual.TIER_3.from &&
      annualSalary <= incomeTaxAnnual.TIER_3.to
    ) {
      taxableAmountRem = incomeTaxAnnual.TIER_3.from - 1;
      annualTaxRate = incomeTaxAnnual.TIER_3.rate;
      // If salary is between $80,001 - $180,000
    } else if (
      annualSalary >= incomeTaxAnnual.TIER_4.from &&
      annualSalary <= incomeTaxAnnual.TIER_4.to
    ) {
      taxableAmountRem = incomeTaxAnnual.TIER_4.from - 1;
      annualTaxRate = incomeTaxAnnual.TIER_4.rate;
      // If salary is above $180,001
    } else if (annualSalary >= incomeTaxAnnual.TIER_5.from) {
      taxableAmountRem = incomeTaxAnnual.TIER_5.from - 1;
      annualTaxRate = incomeTaxAnnual.TIER_5.rate;
      // If salary is $0 - $20,000
    } else {
      return incomeTaxAnnual.TIER_1.rate;
    }

    // Calculate taxable income within current tax bracket, and
    // recursively calculate for remaining taxable amount within previous tax brackets
    incomeTax = (annualSalary - taxableAmountRem) * annualTaxRate;
    return incomeTax + this.calcAnnualIncomeTax(taxableAmountRem);
  }
}
