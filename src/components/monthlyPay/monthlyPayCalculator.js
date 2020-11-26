/************************************************************
 * Purpose: Calculates monthly pay data
 *************************************************************/
import annualPay from "../annualPay/annualPayCalculator";

export default class monthlyPayCalculator {
  /**
   * Calculates monthly pay data
   * @param annualSalary
   */
  calcMonthlyPayData(annualSalary, annualIncomeTax) {
    const monthlyIncome = (annualSalary / 12).toFixed(0);
    const monthlyIncomeTax = (annualIncomeTax / 12).toFixed(0);
    const monthlyIncomeNet = (monthlyIncome - monthlyIncomeTax).toFixed(0);

    return {
      income: monthlyIncome,
      incomeTax: monthlyIncomeTax,
      incomeNet: monthlyIncomeNet,
    };
  }
}
