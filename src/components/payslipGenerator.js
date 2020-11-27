/************************************************************
 * Purpose: Generates payslips
 *************************************************************/
import incomeTaxCalculator from "./incomeTaxCalculator";

export default class payslipGenerator {
  constructor() {
    this.incomeTaxCalculator = new incomeTaxCalculator();
  }
  /**
   * Generate monthly pay slip
   * @param  empName
   * @param annualSalary
   */
  generateMonthlyPayslip(empName, annualSalary) {
    // Get monthly payslip data
    const monthlyPayData = this.incomeTaxCalculator.calcMonthlyPayData(
      annualSalary
    );
    const monthlyIncome = monthlyPayData["income"];
    const monthlyIncomeTax = monthlyPayData["incomeTax"];
    const monthlyIncomeNet = monthlyPayData["incomeNet"];

    // Print monthly payslip data
    console.log(`=========================================`);
    console.log(`Monthly Payslip for: ${empName}`);
    console.log(`Gross Monthly Income: $${monthlyIncome}`);
    console.log(`Monthly Income Tax: $${monthlyIncomeTax}`);
    console.log(`Net Monthly Income: $${monthlyIncomeNet}`);
    console.log(`=========================================`);

    return true;
  }
}
