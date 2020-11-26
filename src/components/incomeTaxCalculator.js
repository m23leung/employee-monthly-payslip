/************************************************************
 * Purpose: Calculates income tax
 *************************************************************/
import incomeTaxAnnual from "../../constants/incomeTaxAnnual.js";
import monthlyPayCalculator from "./monthlyPay/monthlyPayCalculator";
import annualPayCalculator from "./annualPay/annualPayCalculator";

export default class incomeTaxCalculator {
  constructor() {
    this.monthlyPayCalculator = new monthlyPayCalculator();
    this.annualPayCalculator = new annualPayCalculator();
  }

  /**
   * Calculates monthly pay data
   * @param annualSalary
   */
  calcMonthlyPayData(annualSalary) {
    const annualIncomeTax = this.annualPay.calcAnnualIncomeTax(annualSalary);
    return this.monthlyPay.calcMonthlyPayData(annualSalary, annualIncomeTax);
  }
}
