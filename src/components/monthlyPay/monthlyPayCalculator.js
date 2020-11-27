/************************************************************
 * Purpose: Calculates monthly pay data
 *************************************************************/
export default class monthlyPayCalculator {
  /**
   * Calculates monthly pay data
   * @param annualSalary
   * @param annualIncomeTax
   */
  calcMonthlyPayData(annualSalary, annualIncomeTax) {
    const monthlyIncome = Math.round(annualSalary / 12);
    const monthlyIncomeTax = Math.round(annualIncomeTax / 12);
    const monthlyIncomeNet = Math.round(monthlyIncome - monthlyIncomeTax);

    return {
      income: monthlyIncome,
      incomeTax: monthlyIncomeTax,
      incomeNet: monthlyIncomeNet,
    };
  }
}
