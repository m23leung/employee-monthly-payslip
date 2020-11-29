/****************************************************
 * Purpose: Contains test for payslipGenerator
 *****************************************************/

import { expect } from "chai";
import payslipGenerator from "../../../src/components/payslipGenerator";

describe("paySlipGenerator -  generateMonthlyPayslip", function () {
  const payslipGeneratorObj = new payslipGenerator();
  let returnVal;

  it(`valid - generateMonthlyPayslip #1`, function () {
    const empName = "Freddy Jones";
    const annualSalary = 60000;
    returnVal = payslipGeneratorObj.generateMonthlyPayslip(
      empName,
      annualSalary
    );
    expect(returnVal).to.be.equal(true);
  });
  it(`valid - generateMonthlyPayslip #2`, function () {
    const empName = "Joey Mercury";
    const annualSalary = 100000;
    returnVal = payslipGeneratorObj.generateMonthlyPayslip(
      empName,
      annualSalary
    );
    expect(returnVal).to.be.equal(true);
  });
});
